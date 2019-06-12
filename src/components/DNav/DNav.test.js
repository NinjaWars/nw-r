import React from 'react'
import ReactDOM from 'react-dom'
import DNav from './DNav'
import { BrowserRouter } from 'react-router-dom'

import links from '../../views/fullLinks'

describe('<DNav />', () => {
    it('renders a flat drawer nav', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <BrowserRouter>
                <DNav links={links} />
            </BrowserRouter>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
