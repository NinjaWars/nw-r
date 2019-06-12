import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { default as Layout } from '../../components/Layout/Layout'
import { default as Tile } from '../../components/Tile/Tile'
import { default as Chat } from '../../components/Chat/Chat'
import DNav from '../../components/DNav/DNav'
import mockChats from '../../data/mockChats.json'
import mockProfile from '../../data/mockProfile.json'
import loremIpsum from '../../data/loremIpsum'
import links from '../../views/fullLinks'

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    skySpace: {
        minHeight: '30vh',
    },
})

/**
 * Homepage displays within layout and whatever else you want
 */
const Home = (props) => {
    const { classes } = props
    const store = {
        profile: mockProfile,
        avatarImage: './images/avatar/example_avatar.png',
        chats: mockChats,
    }
    const { profile, chats } = store
    return (
        <Layout
            avatarImage={profile.avatarImage}
            navContent={(<DNav links={links}/>)}
            asideContent={<Chat chats={chats}/>}
        >
            <Tile theme='light'>
                <article className={classes.skySpace}>
                    <Typography variant="h1" color="textSecondary">Homepage Title</Typography>
                    <Typography>Homepage content</Typography>
                </article>
            </Tile>
            <Tile theme='dark'>
                <article>
                    <Typography variant="h3">Intro</Typography>
                    <Typography>Intro content</Typography>
                </article>
            </Tile>
            <Tile theme='light'>
                <article>
                    <Typography variant="h3" color="textSecondary">News</Typography>
                    <Typography>News content: {loremIpsum}</Typography>
                </article>
            </Tile>
            <Tile theme='dark'>
                <article>
                    <Typography variant="h3">Contact</Typography>
                    <Typography>Contact Maybe</Typography>
                </article>
            </Tile>
        </Layout>
    )
}

Home.propTypes = {
    classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Home)
