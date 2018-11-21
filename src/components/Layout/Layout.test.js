import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
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
        const wrapper = mount(<Router><Layout>Inside content</Layout></Router>);
        expect(wrapper.exists('nav')).toEqual(true);
        expect(wrapper.exists('aside')).toEqual(true);
    });

    it('contains a header', () => {
        const wrapper = mount(<Router><Layout>Extra children content</Layout></Router>);
        expect(wrapper.find('header').text()).toContain('NinjaWars');
    });
});
