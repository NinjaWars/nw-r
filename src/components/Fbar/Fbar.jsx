import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import fLinks from '../../views/footerLinks'
import styles from './fbar.module.css'

/**
 * A sticky footer that can expand downwards
 * @param {*} props
 */
const Fbar = (props) => {
    const { className, ...rest } = props
    return (
        <footer className={cx(className, styles.fbar)} {...rest}>
            <div className={styles['link-list']}>
                {fLinks.map(link => {
                    if (link.url && link.url.startsWith('http')){
                        return (
                            <a href={link.url} key={link.url}>{link.icon} {link.text}</a>
                        )
                    } else {
                        return (
                            <Link to={link.url} key={link.url}>{link.icon} {link.text}</Link>
                        )
                    }
                })}
            </div>
            <div className={styles.expandible} style={{textAlign: 'center'}}>
                Brought to you by
                {' '}
                <a href="https://bitlucid.com">BitDog, Inc</a>
            </div>
        </footer>
    )
}

Fbar.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
}

Fbar.defaultProps = {
    classes: {},
}

export default withStyles(styles)(Fbar)
