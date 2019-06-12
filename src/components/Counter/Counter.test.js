import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

describe('<Counter />', () => {
    it('renders a feedback area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Counter count={434} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
