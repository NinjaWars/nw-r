import React, { useState } from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'
import ChatMessage from './ChatMessage'
import Chat from './Chat'
import Tile from '../Tile/Tile'
import mockChats from '../../data/mockChats.json'
import mockProfile from '../../data/mockProfile.json'

addDecorator((storyFn) => <CssBaseline>{storyFn()}</CssBaseline>)

storiesOf('ChatMessage', module).add('with a few chats', () => {
    return (
        <>
            {[...mockChats].map((chat, index) => (
                <ChatMessage key={index} by={chat.by} datetime={chat.datetime}>
                    {chat.message}
                </ChatMessage>
            ))}
        </>
    )
})

// Utility to add lots of chats
const addLotsOfChats = (chatsL) => {
    const chatT = chatsL[chatsL.length - 1] // Template
    for (let i = 0; i < 5; i++) {
        const fakeId = chatsL[chatsL.length - 1].id + i
        chatsL.push({
            ...chatT,
            ...{
                overriding: true,
                id: fakeId,
                by: 'ninja_spammer',
                message: 'some message with fake id: ' + fakeId,
                datetime: new Date().toUTCString(),
            },
        })
    }
    return chatsL
}

/**
 * Quick state wrapper component to add a lot of chat data
 */
// eslint-disable-next-line react/prop-types
const ChatDataAdder = ({ chats: chatsIn, ...rest }) => {
    const [moreChats, setMoreChats] = useState(chatsIn)
    const onClick = () => {
        action('add lots of chats clicked')()
        setMoreChats(addLotsOfChats(moreChats))
    }
    //const chats = moreChats // Replace this after testing
    const chats = addLotsOfChats(chatsIn)
    return (
        <>
            <Button color="primary" variant="contained" onClick={onClick}>
                Add lots of Chats
            </Button>
            <Chat chats={chats} {...rest} />
        </>
    )
}

storiesOf('Chat', module)
    .add('with starting chats', () => {
        const chats = [...mockChats]
        // Display the result of the chat request in the actions area
        const handleChatRequest = (data) => {
            action(`a chat send was requested`, data)()
            action(`Chat data requested was: ${JSON.stringify(data)}`)()
            return true
        }
        return (
            <>
                <Chat
                    chats={chats}
                    handleChatRequest={handleChatRequest}
                    untrustedChatSender={mockProfile.userId}
                    formProps={{
                        action: '#',
                        type: 'POST',
                    }}
                />
            </>
        )
    })
    .add('with null data', () => {
        const chats = null
        // Display the result of the chat request in the actions area
        const handleChatRequest = (data) => {
            action(`a chat send was requested`, data)()
            action(`Chat data requested was: ${JSON.stringify(data)}`)()
            return true
        }
        return (
            <>
                <Chat
                    chats={chats}
                    handleChatRequest={handleChatRequest}
                    untrustedChatSender={mockProfile.userId}
                    formProps={{
                        action: '#',
                        type: 'POST',
                    }}
                />
            </>
        )
    })
    .add('with a dark tile bg', () => {
        // Display the result of the chat request in the actions area
        const handleChatRequest = (data) => {
            action(`a chat send was requested`, data)()
            action(`Chat data requested was: ${JSON.stringify(data)}`)()
            return true
        }
        return (
            <Tile theme="dark">
                <Chat
                    chats={mockChats}
                    handleChatRequest={handleChatRequest}
                    untrustedChatSender={mockProfile.userId}
                    formProps={{
                        action: '#',
                        type: 'POST',
                    }}
                />
            </Tile>
        )
    })
    .add('with addable chats', () => {
        const chats = [...mockChats]
        // Display the result of the chat request in the actions area
        const handleChatRequest = (data) => {
            action(
                `Chat data from long chat requested was: ${JSON.stringify(
                    data
                )}`
            )()
            return true
        }
        return (
            <>
                <ChatDataAdder
                    chats={chats}
                    handleChatRequest={handleChatRequest}
                    untrustedChatSender={mockProfile.userId}
                    formProps={{
                        action: '#',
                        type: 'POST',
                    }}
                />
            </>
        )
    })

    .add('with send-add of chat state', () => {
        // Use a state component to wrap state to enable sending more.
        // eslint-disable-next-line react/prop-types
        const ChatsSendable = ({ chats: initialChats, ...rest }) => {
            const [chats, setChats] = useState(initialChats)
            const latestId = chats[chats.length - 1].id
            const handleChatRequest = (newChat) => {
                newChat.by = 'Current_Addition'
                newChat.datetime = new Date().toUTCString()
                newChat.id = latestId + 1
                chats.unshift(newChat)
                action('Sent a new chat with message:' + newChat.message)()
                setChats(chats)
            }
            return (
                <Chat
                    chats={chats}
                    handleChatRequest={handleChatRequest}
                    {...rest}
                />
            )
        }
        const chats = mockChats
        return (
            <>
                <ChatsSendable
                    chats={chats}
                    untrustedChatSender={mockProfile.userId}
                    formProps={{
                        action: '#',
                        type: 'POST',
                    }}
                />
            </>
        )
    })
