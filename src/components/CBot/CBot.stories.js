import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import CssBaseline from '@material-ui/core/CssBaseline'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'
import CBot from '../../components/CBot/CBot'

addDecorator(storyFn => <CssBaseline>{storyFn()}</CssBaseline>)

storiesOf('CBot', module)
    .add('with placeholder text', () => (
        <>
            <CBot placeholder='Give me a command...'/>
        </>
    ))
