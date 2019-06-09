import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Home from '@material-ui/icons/Home'
import Email from '@material-ui/icons/Email'
import Facebook from '@material-ui/icons/ThumbUpAlt'
import styles from './fbar.module.css'

/*
const styles = () => ({
    footer: {},
    expandible: {},
    linkList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '0 1rem',
        '& > a': {
            paddingRight: '1rem',
        },
    },
})
*/

// List of links with urls and content
const fLinks = [
    {
        url: '/#contact',
        desc: 'Contact Us',
        icon: <Email />
    },
    {
        url: '/',
        desc: 'Home',
        icon: <Home />
    },
    {
        url: 'https://facebook.com/ninjawars.net',
        desc: 'Forum',
        icon: <Facebook />
    },
]

/**
 * A sticky footer that can expand upwards
 * @param {*} props
 */
const Fbar = (props) => {
    const { className, ...rest } = props
    return (
        <footer className={cx(className, styles.fbar)} {...rest}>
            <div className={styles.linkList}>
                {fLinks.map(link => <a href={link.url} key={link.url}>{link.icon} {link.desc}</a>)}
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
