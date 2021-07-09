import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Drawer, Avatar, Button } from '@material-ui/core'
import { faBars, faComments, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import Fbar from '../Fbar/Fbar'
import Hbar, { LeadingArea, CoreArea, FollowingArea, BreakingLink } from '../Hbar/Hbar'
import LogoArea from '../LogoArea'
import bgImage from '../../images/bg/rebel.png'
import links from '../../views/headerLinks'
/* import lStyles from './layout.module.css' */
import hStyles from '../Hbar/hbar.module.css'

const styles = theme => ({
    out: {
        backgroundColor: '#000004',
        color: 'ghostwhite',
        background: `url("${bgImage}") repeat`,
        minHeight: '100vh',
    },
    header: {
        minHeight: '2rem',
        '& > .App-logo': {
            height: '1.5rem',
            width: '1.5rem',
        },
    },
    horizon: {
        height: '90%',
    },
    superNav: {
        gridColumnEnd: 'span 2',
    },
    core: {
        gridColumnEnd: 'span 8',
        height: '100%',
        minHeight: '80vh',
    },
    superAside: {
        gridColumnEnd: 'span 2',
    },
    homeStar: {
        marginRight: theme.spacing(1)
    }
})

const PrimaryDrawer = ({ open, toggle, children, className, ...rest }) => {
    return (
        <Drawer anchor="left" open={open} {...rest}>
            <div className={className}>
                {children}
            </div>
        </Drawer>
    )
}

PrimaryDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
}

/**
 * The Secondary drawer is open until force closed by Xing out
 */
const SecondaryDrawer = ({ open, toggle, children, className, onClose, ...rest }) => {
    return (
        <Drawer anchor="right" className='secondary-drawer' open={open} {...rest}>
            <Button onClick={onClose}><Icon icon={faTimes} /></Button>
            <aside className={className}>
                {children}
            </aside>
        </Drawer>
    )
}
SecondaryDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    toggle: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
}

/**
 * General 1-column layout with side drawers
 * Header HBar area also includes 3 sections for leading hamburger nav, core links /logo / search, and profile / chat
 * @param {*} props
 */
const Layout = ({ navContent, asideContent, profile, open, className, classes, children }) => {
    const [navOpen, setNavOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const [asideOpen, setAsideOpen] = useState(false)
    const { avatarUrl, name } = profile
    const initial = (word) => {
        return word ? word.charAt(0).toUpperCase() : ''
    }
    // Close this nav on any non-navigational keypress or click
    const toggleNav = (openN) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setNavOpen(!openN)
    }
    // Close the chat only when X clicked
    const closeAside = () => {
        setAsideOpen(false)
    }
    return (
        <div className={cx(className, classes.out)}>
            <Hbar className={classes.header}>
                <LeadingArea onClick={(e) => {
                    setNavOpen(!navOpen)
                }}>
                    <Icon className={hStyles['h-icon']} icon={faBars} />
                </LeadingArea>
                <CoreArea>
                    <Link to="/">
                        <LogoArea className={styles.homeStar} shrinkable title="NinjaWars" />
                    </Link>{' '}
                    <span className={hStyles['link-list']}>
                        {links.map((link) => (
                            <BreakingLink key={link.url} link={link} hiddenOnly='mdDown' />
                        ))}
                    </span>
                </CoreArea>
                <FollowingArea>
                    <Button onClick={(e) => {
                        setProfileOpen(!profileOpen)
                    }}>
                        <Avatar src={avatarUrl} alt={initial(name)}>{initial(name)}</Avatar>
                    </Button>
                    <Button onClick={(e) => {
                        setAsideOpen(!asideOpen)
                    }}>
                        <Icon className={hStyles['h-icon']} icon={faComments} />
                    </Button>
                </FollowingArea>
            </Hbar>
            <div className={classes.horizon}>
                <PrimaryDrawer open={open || navOpen} onClick={toggleNav(navOpen)} onKeyDown={toggleNav(navOpen)} className={classes.superNav}>
                    {navContent}
                </PrimaryDrawer>
                <main className={classes.core}>
                    {children}
                </main>
                <SecondaryDrawer open={open || asideOpen} onClose={(e) => { closeAside() }} className={classes.superAside}>
                    {asideContent}
                </SecondaryDrawer>
            </div>
            <Fbar />
        </div>
    )
}

Layout.propTypes = {
    profile: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    classes: PropTypes.shape({}).isRequired,
    open: PropTypes.bool,
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
    profile: {},
    navContent: "",
    asideContent: "",
}

export default withStyles(styles)(Layout)
