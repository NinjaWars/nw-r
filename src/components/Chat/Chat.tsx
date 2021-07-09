import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import ChatMessage from './ChatMessage'
import styles from './chat.module.css'
import FChat from './FChat'

export interface SChatMessage{ 
    id: React.Key | null | undefined,
    by: string,
    datetime: string | Date,
    message: string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray,
}

export interface SendChat{
    message: string | null,
    untrustedChatSender: number | null,
}

interface ChatProps{
    handleChatRequest: (data:SendChat)=>void,
    className?: string,
    noReframe: boolean,
    formProps: any,
    untrustedChatSender?: number,
    chats: SChatMessage[],
    loading: boolean,
}

/**
 * An overall Chat display, use noReframe for main chat system
 * @param { handleSubmission, handleChatRequest } props
 */
class Chat extends Component<ChatProps, {}> {
    constructor(props: ChatProps) {
        super(props)
        this.handleSubmission = this.handleSubmission.bind(this)
        this.handleChatRequest = this.handleChatRequest.bind(this)
    }

    handleSubmission(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault()
        const messageField = e.currentTarget.querySelector('input[name=chat-message]') as HTMLInputElement 
        const senderField = e.currentTarget.querySelector('input[name=untrusted-chat-sender]') as HTMLInputElement
        this.handleChatRequest({
            message: messageField ? messageField.value : null,
            untrustedChatSender: senderField ? senderField.value as unknown as number : null
        })
        e.currentTarget.reset()
        return false
    }

    handleChatRequest(data: SendChat) {
        return this.props.handleChatRequest(data)
    }

    render() {
        // eslint-disable-next-line no-unused-vars
        const { className, noReframe, chats, formProps, untrustedChatSender, handleChatRequest, ...rest } = this.props
        // eslint-disable-next-line no-unused-vars
        // TODO: Skeleton this with react skeleton solution once build is valid
        const { onSubmit, ...restFormProps } = formProps || {}
        return (
            <div className={`${className} ${styles.chat}`} {...rest}>
                {!noReframe && (untrustedChatSender? (
                    <div className={styles['send-area']}>
                    <form onSubmit={this.handleSubmission} {...restFormProps}>
                        <TextField required name="chat-message" className={styles['message-field']} label='Chat Message' />
                        <div>
                            <input type='hidden' name="untrusted-chat-sender" value={untrustedChatSender} />
                            <Button type='submit' size='large' color='primary' className={styles.send}>Chat</Button>
                        </div>
                    </form>
                </div>
                ) : null
                )} {/* Send only if no iframe*/}
                {noReframe ? <FChat /> :
                    chats && <>
                    <section className={styles['chat-messages-area']}>
                    {chats.map((chat) => (
                        <ChatMessage className={styles['chat-message']} key={chat.id} by={chat.by} datetime={chat.datetime}>{chat.message}</ChatMessage>
                    ))}
                    </section>
                    </>
                }
                {}
            </div>
        )
    }
}

export default Chat
