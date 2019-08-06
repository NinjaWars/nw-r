import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'

const profile = {
    avatarUrl: '',
    name: 'Jim Z.',
}

describe('Layout', () => {
    it('renders a three column layout', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Router>
                <Layout profile={profile} open={true}>
                    Interior content
                </Layout>
            </Router>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('contains a header', () => {
        const wrapper = mount(
            <Router>
                <Layout profile={profile} open={true}>
                    Inside content
                </Layout>
            </Router>
        )
        expect(wrapper.exists('header')).toEqual(true)
    })

    it('contains a nav and aside', () => {
        const wrapper = mount(
            <Router>
                <Layout
                    profile={profile}
                    open={true}
                    navContent={
                        <nav>
                            Some nav links because nav is not provided by
                            default, though aside is
                        </nav>
                    }
                >
                    Inside content
                </Layout>
            </Router>
        )
        expect(wrapper.exists('aside')).toEqual(true)
        expect(wrapper.exists('nav')).toEqual(true)
    })

    it('contains a header', () => {
        const wrapper = mount(
            <Router>
                <Layout profile={profile} open={true}>
                    Extra children content
                </Layout>
            </Router>
        )
        expect(wrapper.find('header').text()).toContain('shuriken')
        //expect(wrapper.find('header').text()).toContain('NinjaWars') // Hidden by default for mobile
    })
})
