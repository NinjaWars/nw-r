// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import DNav from '../../components/DNav/DNav'
import Tile from '../../components/Tile/Tile'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'

import links from '../../views/fullLinks'

storiesOf('DNav', module)
    .add('with defaults', () => (
        <BrowserRouter>
            <DNav links={links} />
        </BrowserRouter>
    ))
    .add('with dark theme', () => (
        <BrowserRouter>
            <Tile theme='dark'>
                <DNav links={links} />
            </Tile>
        </BrowserRouter>
    ))
