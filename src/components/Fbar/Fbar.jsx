import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import fLinks from '../../views/footerLinks'
import Tile from '../../components/Tile/Tile'
import styles from './fbar.module.css'
import { version } from '../../../package.json'

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
                    if (link.url && link.url.startsWith('http')) {
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
            <Tile theme='dark' className={styles.expandable}>
                Brought to you by
                {' '}
                <a href="https://bitlucid.com">BitDog Agency</a> &amp; <a href='https://royronalds.com'>Roy Ronalds</a>
            </Tile>
            <Tile theme='light' className={styles.expandable}>
                NW Version {version}
            </Tile>
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
