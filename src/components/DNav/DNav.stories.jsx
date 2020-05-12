// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import DNav from '../../components/DNav/DNav'
import Tile from '../../components/Tile/Tile'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'

import links from '../../views/fullLinks'

export default {
    decorators: [
        (storyFn) => <CssBaseline>{storyFn()}</CssBaseline>
    ],
    title: 'Components|DNav'
}

export const withDefaults = () => (
    <BrowserRouter>
        <DNav links={links} />
    </BrowserRouter>

)

export const withDarkTheme = () => (
    <BrowserRouter>
        <Tile theme="dark">
            <DNav links={links} />
        </Tile>
    </BrowserRouter>
)