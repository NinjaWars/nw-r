import React from 'react'
import ReactDOM from 'react-dom'
import { default as CBot } from './CBot'

describe('<CBot />', () => {
    it('renders a command input field', () => {
        const div = document.createElement('div')
        ReactDOM.render(<CBot placeholder='type a command'/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
