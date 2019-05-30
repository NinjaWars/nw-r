import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './hbar.module.css'

/**
 * Header Bar
 * @param {*} props
 */
const Hbar = (props) => {
    const { classes, className, children, ...rest } = props
    return (
        <header className={cx(className, classes.hbar)} {...rest}>
            {children}
        </header>
    )
}

Hbar.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

Hbar.defaultProps = {
    classes: {},
}

export default withStyles(styles)(Hbar)
