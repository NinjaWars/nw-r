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
import avatarUrl from '../../images/avatar/sample_gravatar.png'

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
        chats: mockChats,
    }
    const { profile, chats } = store
    profile.avatarUrl = avatarUrl
    return (
        <Layout
            profile={profile}
            navContent={(<DNav links={links}/>)}
            asideContent={
                <>
                    <Typography variant="h3" color="secondary">
                        Chat
                    </Typography>
                    <Chat
                        chats={chats}
                        untrustedChatSender={profile.userId}
                    />
                </>
            }
        >
            <Tile theme='light'>
                <article className={classes.skySpace}>
                    <Typography variant="h1" color="textPrimary" gutterBottom>NinjaWars Heading</Typography>
                    <Typography variant="h2" color="textSecondary">Live by the Shuriken</Typography>
                    <Typography>Homepage content</Typography>
                    <p>Available at the site <a href='https://shell.ninjawars.net'>shell.ninjawars.net</a></p>
                </article>
            </Tile>
            <Tile theme='dark'>
                <article>
                    <Typography variant="h3">Intro</Typography>
                    <Typography>Intro content</Typography>
                    <p>Totally regular paragraph p text</p>
                </article>
            </Tile>
            <Tile theme='light'>
                <article>
                    <Typography variant="h3" color="textSecondary">News</Typography>
                    <Typography>News content: {loremIpsum}</Typography>
                    <p>Totally regular paragraph p text</p>
                </article>
            </Tile>
            <Tile theme='dark'>
                <article>
                    <Typography variant="h3">Contact</Typography>
                    <Typography>Contact Maybe</Typography>
                    <p>Totally regular paragraph p text</p>
                </article>
            </Tile>
        </Layout>
    )
}

Home.propTypes = {
    classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Home)
