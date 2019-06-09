import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/icons/Menu'

import Fbar from '../Fbar/Fbar'
import Tile from '../Tile/Tile'
import Hbar, { LeadingArea, CoreArea, FollowingArea } from '../Hbar/Hbar'
import LogoArea from '../LogoArea'
/*import styles from './layout.module.css' */

const styles = theme => ({
    out: {
        backgroundColor: '#000004',
        color: 'ghostwhite',
        background: 'url("http://www.ninjawars.net/images/rebel.png") repeat',
        minHeight: '100vh',
    },
    header: {
        minHeight: '2rem',
        '& > .App-logo': {
            height: '1.5rem',
            width: '1.5rem',
        },
    },
    logo: {
        color: '#ffffff',
    },
    horizon: {
        height: '90%',
        display: 'grid',
        gridGap: `${theme.spacing.unit * 3}px`,
        gridTemplateColumns: 'repeact(12, 1fr)',
    },
    superNav: {
        gridColumnEnd: 'span 2',
    },
    core: {
        gridColumnEnd: 'span 8',
        height: '100%',
        minHeight: '80vh',
    },
    aside: {
        gridColumnEnd: 'span 2',
    },
})

/**
 * A sticky footer that can expand upwards
 * @param {*} props
 */
const Layout = (props) => {
    const { navContent, asideContent, open, avatarImage, classes, children } = props
    return (
        <div className={classes.out}>
            <Hbar className={classes.header}>
                <LeadingArea onClick={()=> console.log('the nav would open here')}>
                    <Menu />
                </LeadingArea>
                <CoreArea>
                    <Link to="/">
                        <LogoArea title="NinjaWars" />
                    </Link>{' '}
                    <Link to="/contact">Contact</Link> <Link to="/about">About</Link>
                </CoreArea>
                <FollowingArea onClick={()=> console.log('The user avatar menu would open here')}>
                    <Avatar src={avatarImage} alt='R'>R</Avatar>
                </FollowingArea>
            </Hbar>
            <div className={classes.horizon}>
                <Drawer anchor="left" open={open}>
                    <nav className={classes.superNav}>
                        {navContent}
                    </nav>
                </Drawer>
                <main className={classes.core}>
                    {children}
                </main>
                <Drawer anchor="right" open={open}>
                    <aside className={classes.aside}>
                        {asideContent}
                    </aside>
                </Drawer>
            </div>
            <Tile theme='dark'>
                Bottom Tile
            </Tile>
            <Fbar />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    classes: PropTypes.shape({}).isRequired,
    open: PropTypes.bool,
    avatarImage: PropTypes.string,
    navContent: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    asideContent: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

Layout.defaultProps = {
    navContent: "",
    asideContent: ""
}

export default withStyles(styles)(Layout)
