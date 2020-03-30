import { configure } from '@storybook/react';

const loaderFn = () => {
    const allExports = [require('../src/stories/index.js')];
    const req = require.context('../src/components', true, /\.stories\.js?x$/);
    req.keys().forEach(fname => allExports.push(req(fname)));
    return allExports;
};

configure(loaderFn, module);