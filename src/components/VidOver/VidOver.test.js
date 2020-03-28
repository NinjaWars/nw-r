import React from 'react'
import ReactDOM from 'react-dom'
import { default as VidOver } from './VidOver'
import image from '../../images/avatar/sample_gravatar.png'
import { ExpansionPanelActions } from '@material-ui/core'

const sourcePairs = [{ source: 'video.webm', type: 'video/webm' }]

describe('<VidOver />', () => {
    it('renders a video overlay with children', () => {
        const div = document.createElement('div')
        // Hack to work around warning / error in test due to video tag calling a dom event
        /* eslint-disable no-console */
        const originalError = console.error
        const error = jest.fn()
        console.error = error
        const result = ReactDOM.render(
            <VidOver
                poster={image}
                sourcePairs={sourcePairs}
                autoPlay={false}
                muted={false}
            >
                top context placeholder text
            </VidOver>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
        expect(error).toHaveBeenCalledTimes(1)
        expect(error).toHaveBeenCalledWith(
            'Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.%s',
            expect.any(String)
        )
        console.error = originalError
        /* eslint-enable no-console */
    })
})
