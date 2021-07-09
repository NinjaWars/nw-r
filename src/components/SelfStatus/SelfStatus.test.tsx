import { NinjaClassOption } from 'components/NinjaClass'
import React from 'react'
import ReactDOM from 'react-dom'
import SelfStatus from './SelfStatus'

describe('<SelfStatus />', () => {
    const mockSelfStats = {
        class: 'tiger' as NinjaClassOption,
        classDisplay: 'tiger' as NinjaClassOption,
        level: 45,
        kills: 2354
    }
    it('renders the SelfStatus area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<SelfStatus stats={mockSelfStats} requirement={55}/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
