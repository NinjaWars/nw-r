import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import ChatMessage from './ChatMessage'
import styles from './chat.module.css'

/**
 * An overall Chat display
 * @param {*} props
 */
class Chat extends Component{
    constructor(props){
        super(props)
        this.handleSubmission = this.handleSubmission.bind(this)
        this.handleChatRequest = this.handleChatRequest.bind(this)
    }

    handleSubmission(e){
        e.preventDefault()
        const messageField = e.currentTarget.querySelector('input[name=chat-message]')
        const senderField = e.currentTarget.querySelector('input[name=untrusted-chat-sender]')
        this.handleChatRequest({
            message: messageField ? messageField.value : null,
            untrustedChatSender: senderField ? senderField.value : null
        })
        e.currentTarget.reset()
        return false
    }

    handleChatRequest(data){
        return this.props.handleChatRequest(data)
    }

    render(){
        // eslint-disable-next-line no-unused-vars
        const { className, chats, formProps, untrustedChatSender, handleChatRequest, ...rest } = this.props
        // eslint-disable-next-line no-unused-vars
        // TODO: Skeleton this with react skeleton solution once build is valid
        const { onSubmit, ...restFormProps } = formProps || {}
        const sendArea = untrustedChatSender ? (
            <div className={styles['send-area']}>
                <form onSubmit={this.handleSubmission} {...restFormProps}>
                    <TextField required ref={this.messageRef} name="chat-message" className={styles['message-field']} label='Chat Message' />
                    <input type='hidden' name="untrusted-chat-sender" value={untrustedChatSender}/>
                    <Button type='submit' className={styles.send}>Send</Button>
                </form>
            </div>
        ) : null
        return (
            <div className={cx(className, styles.chat)} {...rest}>
                {sendArea}
                {chats && chats.map((chat)=>(
                    <ChatMessage className={styles['chat-message']} key={chat.id} by={chat.by} datetime={chat.datetime}>{chat.message}</ChatMessage>
                ))}
            </div>
        )
    }
}

Chat.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    untrustedChatSender: PropTypes.number,
    chats: PropTypes.array,
    formProps: PropTypes.object,
    handleChatRequest: PropTypes.func, // Callback to handle a chat send request
}

Chat.defaultProps = {
    classes: {},
}

export default Chat
