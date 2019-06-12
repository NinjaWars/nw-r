import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { default as Layout } from '../../components/Layout/Layout'
import { default as Tile } from '../../components/Tile/Tile'
import { default as Chat } from '../../components/Chat/Chat'

import mockChats from '../../data/mockChats.json'
import mockProfile from '../../data/mockProfile.json'
import loremIpsum from '../../data/loremIpsum'

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    skySpace: {
        height: '100%',
        minHeight: '80vh',
    },
})

const Nav = () => {

}

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
            navContent={(<Nav />)}
            asideContent={<Chat chats={chats}/>}
        >
            <article className={classes.skySpace}>
                <Typography variant="h1" color="textSecondary">Homepage Title</Typography>
                <Typography>Homepage content</Typography>
            </article>
            <Tile theme='light'>
                <Typography variant="h3" color="textSecondary">Tile content</Typography>
                <Typography>Homepage content</Typography>
            </Tile>
            <Typography variant="h1" color="primary">
                            <article className={classes.skySpace}>
                <Typography variant="h1" color="textSecondary">Homepage Title</Typography>
                <Typography>Homepage content</Typography>
            </article>
            </Typography>
            <Typography variant="h2" color="secondary">
                With not much in it
            </Typography>
            <p>{loremIpsum}</p>
        </Layout>
    )
}

Home.propTypes = {
    classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Home)
