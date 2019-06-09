import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './chat.module.css'
import ChatMessage from './ChatMessage'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

/**
 * An overall Chat display
 * @param {*} props
 */
const Chat = ({ classes, className, children, chats, ...rest }) => {
    return (
        <div className={cx(className, styles.chat)} {...rest}>
            <form>
                <TextField label='Send Message' />
                <Button type='submit'>Send</Button>
            </form>
            {chats.map((chat)=>(
                <ChatMessage key={chat.id} by={chat.by} datetime={chat.datetime}>{chat.message}</ChatMessage>

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
}

Chat.defaultProps = {
    classes: {},
}

export default withStyles(styles)(Chat)
