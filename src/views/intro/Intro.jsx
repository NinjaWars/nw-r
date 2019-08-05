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

const styles = () => ({

})

const Intro = () => {
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
        <Typography variant="h1">The Ninja Game at Ninjawars.net</Typography>
        <Typography variant='subtitle1' color='secondary'>Live by the Shuriken!</Typography>
        <p>
            The game is mainly one of fighting against other ninja.  Once you are a ninja, you can start by:
            <ul>
                <li>
                    Attacking townsfolk like the thief, villager, or merchant. 
                </li>
                <li>
                    Kill other ninja!  Fight &gt;&gt; Pick ninja nearby, or click the ninjas page.
                </li>
                <li>
                    Use your skills or items to make more effective attacks.
                </li>
                <li>
                    If you die, just drag your ghost to the shrine and the monks will bring you back (click the resurrect link)
                </li>
            </ul>
        </p>
        <p>
            You can buy items to help your attack at the shop, but you'll need to work in the fields to get gold to afford anything.
            Once you get enough kills, you can level up at the dojo.
        </p>
        
    </Layout>
  </>
    )}

export default withStyles(styles)(Intro)
