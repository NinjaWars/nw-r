// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Chat from '../../components/Chat/Chat'
import loremIpsum from '../../data/lorem-ipsum'
import avatarImage from '../../images/avatar/sample_gravatar.png'

storiesOf('Layout', module)
    .add('with simple lorem ipsum', () => (
        <BrowserRouter>
            <Layout
                avatarImage={avatarImage}
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
                avatarImage={avatarImage}
                asideContent={<Chat chats={[]} />}
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
