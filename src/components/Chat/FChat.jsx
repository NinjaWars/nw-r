import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import config from '../../config'
import Reframe from '../Reframe'

import styles from './fchat.module.css'


const url = config.remote + 'village'
/**
 * FChat, for frame-based chat messages
 * @param {*} props
 */
const FChat = ({ className, classes, ...rest }) => {
    return (
        <Reframe title='Chat' src={url} className={cx(className, styles.component)} {...rest} />
    )
}

FChat.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.shape({}),
}

FChat.defaultProps = {
    classes: {},
}

export default withStyles(styles)(FChat)
