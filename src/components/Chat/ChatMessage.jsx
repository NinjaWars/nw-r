import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import TimeAgo from 'react-timeago'
import styles from './chat.module.css'


/**
 * Display a single message of a chat message with author and time
 * @param {*} props
 */
const ChatMessage = ({ by, datetime, classes, className, children, ...rest }) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', }
    const dRender = datetime instanceof Date ? datetime.toLocaleDateString('en-US', options) : datetime
    const utc = datetime instanceof Date ? datetime.toUTCString() : datetime
    return (
        <div className={cx(className, styles['chat-message'])} {...rest}>
            <strong>{by}</strong>{' '}
            {children}{' '}
            <TimeAgo date={utc} title={dRender} className='chat-message-time timeago'>{dRender}</TimeAgo>
        </div>
    )
}

ChatMessage.propTypes = {
    by: PropTypes.string.isRequired,
    datetime: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]).isRequired,
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
