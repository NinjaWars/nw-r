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
import styles from './rules.module.css'

const RuleTitle = ({ children }) => (
    <Typography variant='h2' className={styles.ruleTitle}>
        {children}
    </Typography>
)

const RuleContent = ({ children }) => (
    <p>{children}</p>
)

// Helper class to style rule penalty accent area
const RulePenalty = ({ children }) => (
    <div className={styles.rulePenalty}>
        <span className={styles.rulePenaltyPreface}>Penalty:</span>{children}
    </div>
)

const Rules = () => {
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
                <section className={styles.rules}>
                    <Typography variant='h1'>Fair Play Rules</Typography>
                    <Typography component='div'>
                        <div className={styles.spaced}>
                            <RuleTitle>Do not multiplay</RuleTitle>
                            <RuleContent>Multiplaying is actively using two or more characters.<br />
    Players using multiple characters will have their accounts suspended indefinitely.</RuleContent>
                            <RulePenalty>Suspension of all accounts involved in the multiplaying.</RulePenalty>
                        </div>
                        <div className={styles.spaced}>
                            <RuleTitle>Do not abuse bugs, help us by reporting them.</RuleTitle>
                            <RuleContent>Players finding and being the first to report bugs descriptively enough to allow them to be fixed will be rewarded. Silently abusing a bug to gain unfair advantage over other players, on the other hand, will result in suspension of your account. Clans with leaders who abuse bugs will necessarily be disbanded when the clanleader's account is suspended.</RuleContent>
                            <RulePenalty>Suspension of the account abusing the bug.</RulePenalty>
                        </div>
                        <div className={styles.spaced}>
                            <RuleTitle>Do not spam</RuleTitle>
                            <RuleContent>Spamming is excessive use of any of the communication method; chat, mail, forums, etc without specifically directing the posts that you make at any player. While conversing with another player, it is acceptable to post frequently. If no other players are involved in a conversation with you, on the other hand, what you are doing is probably just spamming.
    Spamming, whether in the chat room or on the forum, is annoying and unnecessary. Newbies may not know enough not to spam, tell them not to. Spammers will either become unable to access the place that they spam on, or their accounts will be suspended, whichever proves necessary.</RuleContent>
                            <RulePenalty>First Offence: Warning.  Second Offence: Loss of messaging capabilities or suspension of account that is spamming.</RulePenalty>
                        </div>

                        <div>
                            Other than that, kill each-other and have fun.
                        </div>

                    </Typography>
                </section>
            </Layout>
        </>
    )
}

export default withStyles(styles)(Rules)
