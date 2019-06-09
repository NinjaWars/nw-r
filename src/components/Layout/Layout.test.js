import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'

describe('Layout', () => {
    it('renders a three column layout', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Router>
                <Layout>Interior content</Layout>
            </Router>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('contains a nav and aside', () => {
        const wrapper = mount(
            <Router>
                <Layout open>Inside content</Layout>
            </Router>
        )
        expect(wrapper.exists('nav')).toEqual(true)
        expect(wrapper.exists('aside')).toEqual(true)
    })

    it('contains a header', () => {
        const wrapper = mount(
            <Router>
                <Layout>Extra children content</Layout>
            </Router>
        )
        expect(wrapper.find('header').text()).toContain('NinjaWars')
    })
})
