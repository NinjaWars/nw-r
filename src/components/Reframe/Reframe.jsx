/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './reframe.module.css'

/**
 * Pass through source urls to the rest of the site via iframe
 * @param {*} props
 */
const Reframe = ({ src, title, classes, className, ...rest }) => {
    return (
        <iframe className={cx(className, styles.reframe)} frameBorder='0' title={title} name="main" src={src} {...rest}>
            {/* Note the the frameBorder attribute is apparently case sensitive in some versions of ie  */}
            <a href={src} target='_blank' rel='noopener'>Content</a> unable to be loaded.
        </iframe>
    )
}

Reframe.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    classes: PropTypes.shape({}),
    className: PropTypes.string
}

Reframe.defaultProps = {
    title: 'Core',
    classes: {},
}

export default withStyles(styles)(Reframe)
