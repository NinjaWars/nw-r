import { configure } from '@storybook/react'

function loadStories() {
    require('../src/stories')
    const req = require.context('../src/components', true, /\.stories\.js?x$/)
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)