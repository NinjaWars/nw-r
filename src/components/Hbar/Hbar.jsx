import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Button, Hidden } from '@material-ui/core'


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
        <div className={cx(styles.leader, className)}>
            <Button type='button' onClick={onClick} {...rest}>
                {children}
            </Button>
        </div>
    )
}

LeadingArea.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

/**
 * Following area of the header bar, generally for the avatar menu and aside opener
 */
const FollowingArea = ({ children, className, ...rest }) => {
    return (
        <div className={cx(styles.follower, className)} {...rest}>
            {children}
        </div>
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

/**
 * Wrap links in breakpoints as needed
 */
const BreakingLink = ({ link }) => {
    const Cont = <><Link to={link.url}>{link.icon} {link.text}</Link>{' '}</>
    const Final = link.hiddenOnly ? <Hidden only={link.hiddenOnly}>{Cont}</Hidden> : Cont
    return Final
}

export { LeadingArea, CoreArea, FollowingArea, BreakingLink }

export default withStyles(styles)(Hbar)
