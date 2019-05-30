import React from 'react'
import ReactDOM from 'react-dom'
import { default as Hbar } from './Hbar'

describe('<Hbar />', () => {
    it('renders a header bar', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Hbar>Some text inside</Hbar>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
