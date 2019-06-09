import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from './hbar.module.css'

/**
 * Header Bar, for housing top menu buttons links and logo
 * @param {*} props
 */
const Hbar = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { className, children, classes, ...rest } = props
    return (
        <header className={cx(className, styles.hbar)} {...rest}>
            {children}
        </header>
    )
}

Hbar.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.shape({}),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

Hbar.defaultProps = {
    classes: {},
}

/**
 * Leading area of the header bar, generally for the hamburger menu
 */
const LeadingArea = ({ onClick, children, className, ...rest }) => {
    return (
        <Button type='button' className={cx(styles.leader, className)} onClick={onClick} {...rest}>
            {children}
        </Button>
    )
}

LeadingArea.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

/**
 * Following area of the header bar, generally for the avatar menu
 */
const FollowingArea = ({ onClick, children, className, ...rest }) => {
    return (
        <Button type='button' className={cx(styles.follower, className)} onClick={onClick} {...rest}>
            {children}
        </Button>
    )
}

FollowingArea.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

/**
 * Following area of the header bar, generally for the avatar menu
 */
const CoreArea = ({ children, className, ...rest }) => {
    return (
        <div className={cx(styles.core, className)} {...rest}>
            {children}
        </div>
    )
}

CoreArea.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export { LeadingArea, CoreArea, FollowingArea }

export default withStyles(styles)(Hbar)
