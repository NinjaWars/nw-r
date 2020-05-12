import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import styles from './sinfo.module.css'

/**
 * Simple component to notate story info that is obviously out of flow
 */
const SInfo = ({ className, children, classes, ...rest }) => {
    // eslint-disable-next-line no-unused-vars
    return (
        <Alert className={`sinfo`} severity="info" {...rest}>
            <AlertTitle>Story Info</AlertTitle>
            {children}
        </Alert>
    )
}

SInfo.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

export default withStyles(styles)(SInfo)
