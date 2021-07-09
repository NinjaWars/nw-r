import React from 'react'
import ReactDOM from 'react-dom'
import NinjaClass from './NinjaClass'

describe('<NinjaClass />', () => {
    it('renders the NinjaClass area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<NinjaClass ninjaClass='tiger'>Tiger</NinjaClass>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
