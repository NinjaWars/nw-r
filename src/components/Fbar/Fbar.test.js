import React from 'react';
import ReactDOM from 'react-dom';
import { default as Fbar } from './Fbar';

describe('<Fbar />', () => {
    it('renders a footer bar', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Fbar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
