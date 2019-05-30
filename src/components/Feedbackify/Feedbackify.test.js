import React from 'react'
import ReactDOM from 'react-dom'
import Feedbackify from './Feedbackify'

describe('<Feedbackify />', () => {
    it('renders a feedback area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Feedbackify up={44} down={23} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
