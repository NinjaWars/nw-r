import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Enzyme documentation here:
// Shallow: https://airbnb.io/enzyme/docs/api/shallow.html
// Mount: https://airbnb.io/enzyme/docs/api/mount.html
// Jest-Enzyme functions: https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme

describe('Overall app smoke test', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
