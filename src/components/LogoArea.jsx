import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './logoarea.module.css'
import { ReactComponent as Logo } from '../images/svg/shuriken.svg'

/**
 * LogoArea for displaying svg plus text tile in a constrained way
 * @param {*} props
 */
const LogoArea = (props) => {
    const { classes, className, title, ...rest } = props
    return (
        <div className={cx(className, classes.logoarea)} {...rest}>
            <Logo className={classes.logo}/>
            <span className={classes.title}>{title}</span>
        </div>
    )
}

LogoArea.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    title: PropTypes.string,
}

LogoArea.defaultProps = {
    classes: {},
}

export default withStyles(styles)(LogoArea)
