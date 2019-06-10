import React from 'react'
import { withStyles } from '@material-ui/core/styles'
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
const Chat = ({ classes, className, children, chats, onClick, ...rest }) => {
    return (
        <div className={cx(className, styles.chat)} {...rest}>
            <div className={styles['send-area']}>
                <TextField name="chat-message" className={styles['message-field']} label='Message' />
                <Button type='submit' className={styles.send} onClick={onClick}>Send</Button>
            </div>
            {chats.map((chat)=>(
                <ChatMessage className={styles['chat-message']} key={chat.id} by={chat.by} datetime={chat.datetime}>{chat.message}</ChatMessage>
            ))}
        </div>
    )
}

Chat.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    chats: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}

Chat.defaultProps = {
    classes: {},
}

export default withStyles(styles)(Chat)
