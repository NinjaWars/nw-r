import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './Logo'

describe('<Logo />', () => {
    it('renders the Logo area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Logo />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
