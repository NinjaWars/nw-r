import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './chatmessage.module.css'


/**
 * Display a single message of a chat message with author and time
 * @param {*} props
 */
const ChatMessage = ({ by, datetime, classes, className, children, ...rest }) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',  }
    const dRender = datetime instanceof Date ? datetime.toLocaleDateString('en-US', options) : ''
    const utc = datetime instanceof Date ? datetime.toUTCString() : ''
    return (
        <div className={cx(className, styles.chatMessage)} {...rest}>
            <strong>{by}</strong>{' '}
            {children}{' '}
            <time dateTime={utc} title={dRender} className='chat-message-time timeago'>{dRender}</time>
        </div>
    )
}

ChatMessage.propTypes = {
    by: PropTypes.string.isRequired,
    datetime: PropTypes.instanceOf(Date).isRequired,
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

ChatMessage.defaultProps = {
    classes: {},
}

export default withStyles(styles)(ChatMessage)
