import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom'

import styles from './dnav.module.css'
import LogoArea from '../LogoArea'

/**
 * Render a simple nav list
 */
const DNav = ({className, links}) => {
    return (
        <nav className={cx(className, styles.nav)}>
            <LogoArea title='NinjaWars' />
            <Divider />
            {links.map((link, index)=>(
                <div key={index} className={styles.row}>
                    <Link to={link.url}>{link.icon} {link.text}</Link>
                </div>
            ))}
        </nav>
    )
}

DNav.propTypes = {
    className: PropTypes.string,
    links: PropTypes.array.isRequired,
}

export default DNav