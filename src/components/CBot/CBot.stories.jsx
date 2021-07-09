import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'
import CBot from '../../components/CBot/CBot'
import Tile from '../../components/Tile/Tile'


export default {
    decorators: [
        (storyFn) => <CssBaseline>{storyFn()}</CssBaseline>
    ],
    title: 'Components/CBot',
};

export const withPlaceholderText = () => (
    <>
        <CBot placeholder="Give me a command..." />
    </>
)

export const inDarkTile = () => (
    <Tile theme="dark">
        <CBot placeholder="command..." />
    </Tile>
)
