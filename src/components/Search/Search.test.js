import React from 'react'
import ReactDOM from 'react-dom'
import { default as Search, SearchCompact } from './Search'

describe('<Search />', () => {
    it('renders a search field', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Search />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})

describe('<SearchCompact />', () => {
    it('renders a search icon, that can expand into a search', () => {
        const div = document.createElement('div')
        ReactDOM.render(<SearchCompact />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
