import React from 'react'
import ReactDOM from 'react-dom'
import NinjaLevel from './NinjaLevel'

describe('<NinjaLevel />', () => {
    it('renders the NinjaLevel area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NinjaLevel level={99}/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
