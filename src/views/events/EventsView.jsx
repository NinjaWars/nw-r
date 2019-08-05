import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { default as Layout } from '../../components/Layout/Layout'
import { default as Chat } from '../../components/Chat/Chat'
import DNav from '../../components/DNav/DNav'
import mockChats from '../../data/mockChats.json'
import mockProfile from '../../data/mockProfile.json'
import links from '../../views/fullLinks'
import avatarUrl from '../../images/avatar/sample_gravatar.png'
import Reframe from '../../components/Reframe/Reframe'
import config from '../../config.js'

const styles = () => ({

})

const url = config.remote + 'events'

const EventsView = () => {
    const store = {
        profile: mockProfile,
        chats: mockChats,
    }
    const { profile, chats } = store
    profile.avatarUrl = avatarUrl
    return (
  <>
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
        }>
        <Reframe title='Events' src={url} />
    </Layout>
  </>
    )}

export default withStyles(styles)(EventsView)
