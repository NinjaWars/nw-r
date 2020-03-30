// eslint-disable-next-line no-unused-vars
import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import CssBaseline from '@material-ui/core/CssBaseline'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'
import Reframe from '../../components/Reframe/Reframe'

addDecorator((storyFn) => <CssBaseline>{storyFn()}</CssBaseline>)

storiesOf('Reframe', module)
    .add('with remote intro page', () => (
        <>
            <Reframe
                src="https://www.ninjawars.net/intro"
                title="The Intro page area"
            />
        </>
    ))
    .add('with remote fight page', () => (
        <>
            <Reframe
                src="https://www.ninjawars.net/enemies"
                title="The enemies page"
            />
        </>
    ))
    .add('with remote ninja list page', () => (
        <>
            <Reframe
                src="https://www.ninjawars.net/list"
                title="The ninjas list"
            />
        </>
    ))
