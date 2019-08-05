import React from 'react'
import ReactDOM from 'react-dom'
import { default as VidOver } from './VidOver'
import image from '../../images/avatar/sample_gravatar.png'

const sourcePairs = [{ source: 'video.webm', type: 'video/webm' }]

describe('<VidOver />', () => {
    it('renders a video overlay with children', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <VidOver poster={image} sourcePairs={sourcePairs}>
                top context placeholder text
            </VidOver>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
