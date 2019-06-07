import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Home from './views/home/Home'
import Contact from './views/contact/Contact'
import About from './views/about/About'
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
        expect(wrapper.text()).toContain('NinjaWars')
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
