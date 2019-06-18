// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Chat from '../../components/Chat/Chat'
import DNav from '../../components/DNav/DNav'
import links from '../../views/fullLinks'
import loremIpsum from '../../data/loremIpsum'
import mockProfile from '../../data/mockProfile'
import avatarImage from '../../images/avatar/sample_gravatar.png'
import mockChats from '../../data/mockChats'

mockProfile.avatarUrl = avatarImage
// override avatar for mockProfile

addDecorator((storyFn) => <CssBaseline>{storyFn()}</CssBaseline>)

storiesOf('Layout', module)
    .add('with simple lorem ipsum', () => (
        <BrowserRouter>
            <Layout
                profile={mockProfile}
                asideContent={'Aside text'}
                navContent={'Nav Text'}
            >
                <Typography variant="h1" color="primary">
                    Main Content Area
                </Typography>
                <Typography variant="h2" color="secondary">
                    With not much in it
                </Typography>
                <p>{loremIpsum}</p>
                <Button>A button text</Button>
            </Layout>
        </BrowserRouter>
    ))
    .add('with near-full content', () => (
        <BrowserRouter>
            <Layout
                profile={mockProfile}
                asideContent={(
                    <>
                        <Typography variant='h3' color='secondary'>
                            Chat
                        </Typography>
                        <Chat chats={mockChats} />
                    </>
                )}
                navContent={<DNav links={links} />}
            >
                <Typography variant="h1" color="primary">
                    Main Content Area
                </Typography>
                <Typography variant="h2" color="secondary">
                    With not much in it
                </Typography>
                <p>{loremIpsum}</p>
                <Button>A button text</Button>
            </Layout>
        </BrowserRouter>
    ))
