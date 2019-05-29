import React from 'react'
import ReactDOM from 'react-dom'
import Feedbackify from './Feedbackify'

describe('<Feedbackify />', () => {
    it('renders a feedback area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Feedbackify />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
