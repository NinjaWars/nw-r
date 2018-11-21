import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { default as Layout } from './Layout';
import logo from '../../logo.svg';
import { BrowserRouter as Router } from "react-router-dom";

describe('Layout', () => {
    it('renders a three column layout', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><Layout /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('contains a nav and aside', ()=>{
        const wrapper = shallow(<Layout>Inside content</Layout>);
        expect(wrapper.contains(<nav>Nav</nav>));
        expect(wrapper.contains(<aside>Aside</aside>));
    });

    it('contains a header', () => {
        const wrapper = shallow(<Layout>Extra children content</Layout>);
        expect(wrapper.find('header').text()).toContain('NinjaWars');
    });
});
