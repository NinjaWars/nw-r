// eslint-disable-next-line no-unused-vars
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'
import Reframe from '../../components/Reframe/Reframe'

export default {
    decorators: [
        (storyFn) => <CssBaseline>{storyFn()}</CssBaseline>
    ],
    title: 'Components/Reframe'
}

export const withRemoteIntroPage = () => (
    <>
        <Reframe
            src="https://www.ninjawars.net/intro"
            title="The Intro page area"
        />
    </>
)

export const withRemoteFightPage = () => (
    <>
        <Reframe
            src="https://www.ninjawars.net/enemies"
            title="The enemies page"
        />
    </>
)

export const withRemoteNinjaListPage = () => (
    <>
        <Reframe
            src="https://www.ninjawars.net/list"
            title="The ninjas list"
        />
    </>
)