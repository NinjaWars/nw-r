import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Drawer, Avatar, Button } from '@material-ui/core'
import { faBars, faComments, faAt, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import Fbar from '../Fbar/Fbar'
import Hbar, { LeadingArea, CoreArea, FollowingArea } from '../Hbar/Hbar'
import { SearchCompact } from '../Search/Search'
import LogoArea from '../LogoArea'
import bgImage from '../../images/bg/rebel.png'
/* import styles2 from './layout.module.css' */

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
    superAside: {
        gridColumnEnd: 'span 2',
    },
    icon: {
        fontSize: '3rem',
    },
    linkList: {
        display: 'inline',
        '& a': {
            padding: '0 0.5rem',
            display: 'inline-block',
        }
    },
    searchArea: {
        paddingLeft: '1rem'
    }
})

const PrimaryDrawer = ({ open, toggle, children, className })=>{
    return (
        <Drawer anchor="left" open={open}>
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

const SecondaryDrawer = ({ open, toggle, children, className })=>{
    return (
        <Drawer anchor="right" open={open}>
            <aside className={className}>
                {children}
            </aside>
        </Drawer>
    )
}
SecondaryDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
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
    const [ navOpen, setNavOpen ] = useState(false)
    const [ profileOpen, setProfileOpen ] = useState(false)
    const [ asideOpen, setAsideOpen ] = useState(false)
    const { avatarUrl, name } = profile
    const initial = (word)=>{
        return word ? word.charAt(0).toUpperCase() : ''
    }
    return (
        <div className={cx(className, classes.out)}>
            <Hbar className={classes.header}>
                <LeadingArea onClick={(e)=> {
                    setNavOpen(!navOpen)
                }}>
                    <Icon className={classes.icon} icon={faBars} />
                </LeadingArea>
                <CoreArea>
                    <Link to="/">
                        <LogoArea shrinkable title="NinjaWars" />
                    </Link>{' '}
                    <span className={classes.linklist}>
                        <Link to="/contact"><Icon icon={faAt}/></Link>{' '}
                        <Link to="/about"><Icon icon={faInfo}/></Link>
                    </span>
                    <span className={classes.searchArea}>
                        <SearchCompact label='Search'/>
                    </span>
                </CoreArea>
                <FollowingArea>
                    <Button onClick={(e)=>{
                        setProfileOpen(!profileOpen)
                    }}>
                        <Avatar src={avatarUrl} alt={initial(name)}>{initial(name)}</Avatar>
                    </Button>
                    <Button onClick={(e)=> {
                        setAsideOpen(!asideOpen)
                    }}>
                        <Icon className={classes.icon} icon={faComments}/>
                    </Button>
                </FollowingArea>
            </Hbar>
            <div className={classes.horizon}>
                <PrimaryDrawer open={open || navOpen} className={classes.superNav}>
                    {navContent}
                </PrimaryDrawer>
                <main className={classes.core}>
                    {children}
                </main>
                <SecondaryDrawer open={open || asideOpen} className={classes.superAside}>
                    {asideContent}
                </SecondaryDrawer>
            </div>
            <Fbar />
        </div>
    )
}

Layout.propTypes = {
    profile: PropTypes.shape({}),
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
