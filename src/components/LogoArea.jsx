import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './logoarea.module.css'
import { ReactComponent as Logo } from '../images/svg/shuriken.svg'
import Hidden from '@material-ui/core/Hidden'

/**
 * LogoArea for displaying svg plus text tile in a constrained way
 * @param {*} props
 */
const LogoArea = (props) => {
    const { className, shrinkable, title } = props
    const titleText = (
        <>
            {' '}<span className={styles.title}>{title}</span>
        </>
    )
    return (
        <>
            <div className={cx(className, styles.logoarea)} >
                <Logo className={styles.logo} />
                {shrinkable ?
                    <Hidden mdDown>{titleText}</Hidden> :
                    titleText
                }
            </div>
        </>
    )
}

LogoArea.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    shrinkable: PropTypes.bool,
}

LogoArea.defaultProps = {
}

export default LogoArea
