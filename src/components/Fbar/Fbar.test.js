import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { default as Fbar } from './Fbar'

describe('<Fbar />', () => {
    it('renders a footer bar', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <Fbar />
            </BrowserRouter>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
