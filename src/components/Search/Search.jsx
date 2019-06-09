import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './search.module.css'
import TextField from '@material-ui/core/TextField'

/**
 * Simple Search box
 * @param {*} props
 */
const Search = ({ classes, className, ...rest }) => {
    return (
        <TextField className={cx(className, styles.tile)} {...rest} />
    )
}

Search.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
}

Search.defaultProps = {
    classes: {},
}

export default withStyles(styles)(Search)
