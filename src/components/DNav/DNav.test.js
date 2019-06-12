import React from 'react'
import ReactDOM from 'react-dom'
import DNav from './DNav'

import links from '../../views/fullLinks'

describe('<DNav />', () => {
    it('renders a flat drawer nav', () => {
        const div = document.createElement('div')
        ReactDOM.render(<DNav links={links} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
