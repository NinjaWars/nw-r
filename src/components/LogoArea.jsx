import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './logoarea.module.css'
import { ReactComponent as Logo } from '../images/svg/shuriken.svg'

/**
 * LogoArea for displaying svg plus text tile in a constrained way
 * @param {*} props
 */
const LogoArea = (props) => {
    const { className, title } = props
    return (
        <>
        <div className={cx(className, styles.logoarea)} >
            <Logo className={styles.logo}/>{' '}
            <span className={styles.title}>{title}</span>
        </div>
        </>
    )
}

LogoArea.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
}

LogoArea.defaultProps = {
}

export default LogoArea
