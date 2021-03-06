import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Home from './home/Home'
import Contact from './contact/Contact'
import About from './about/About'
import { BrowserRouter as Router } from 'react-router-dom'

describe('test various pages', () => {
    it('renders the homepage without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Router>
                <Home />
            </Router>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('has ninjawars messaging in it', () => {
        const wrapper = mount(
            <Router>
                <Home />
            </Router>
        )
        expect(wrapper.find('header').text()).toContain('shuriken.svg')
        expect(wrapper.find('main').text()).toContain('NinjaWars')
        expect(wrapper.find('main').text()).toContain('Intro')
    })

    it('has about titling on the about page', () => {
        const wrapper = mount(
            <Router>
                <About />
            </Router>
        )
        expect(wrapper.text()).toContain('About')
    })

    it('has about contact titling on the contact page', () => {
        const wrapper = mount(
            <Router>
                <Contact />
            </Router>
        )
        expect(wrapper.text()).toContain('Contact')
    })
})
