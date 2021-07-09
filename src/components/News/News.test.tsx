import React from 'react'
import ReactDOM from 'react-dom'
import News from './News'
import mockNews from 'models/mockNews'

describe('<News />', () => {
    it('renders the News area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<News article={mockNews[0]}/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
