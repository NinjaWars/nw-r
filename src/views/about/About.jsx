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
import { Link } from 'react-router-dom'

const styles = () => ({

})

const About = () => {
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
                navContent={(<DNav links={links} />)}
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
                <Typography variant="h1">About NinjaWars</Typography>
                <p>
                    The game is mainly one of fighting against other ninja.  Once you are a ninja, you can start by:
                </p>
                <ul>
                    <li>
                        <Link to='fight'>Attack townsfolk</Link> like the thief, villager, or merchant.
                    </li>
                    <li>
                        Kill other ninja!  <Link to='fight'>Fight</Link> &gt; Pick ninja nearby, or click the <Link to='ninjas'>ninjas</Link> page.
                    </li>
                    <li>
                        Use your <Link to='skills'>skills</Link> or <Link to='inventory'>items</Link> to make more effective attacks.
                    </li>
                    <li>
                        If you die, just drag your ghost to the <Link to='shrine'>shrine</Link> and the monks will bring you back
                    </li>
                </ul>
                <p>
                    You can buy items to help your attack at the <Link to='shop'>shop</Link>, but you'll need to work in the <Link to='map'>fields</Link> to get gold to afford anything.
                    Once you get enough kills, you can level up at the <Link to='dojo'>dojo</Link>.
                </p>
            </Layout>
        </>
    )
}

export default withStyles(styles)(About)
