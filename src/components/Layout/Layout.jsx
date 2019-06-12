import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {Drawer, Avatar, Button } from '@material-ui/core'
import { faBars, faComments, faAt, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import Fbar from '../Fbar/Fbar'
import Hbar, { LeadingArea, CoreArea, FollowingArea } from '../Hbar/Hbar'
import { SearchCompact } from '../Search/Search'
import LogoArea from '../LogoArea'
import bgImage from '../../images/bg/rebel.png'
/* import styles from './layout.module.css' */

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
    aside: {
        gridColumnEnd: 'span 2',
    },
    icon: {
        fontSize: '3rem',
    }
})

/**
 * A sticky footer that can expand upwards
 * @param {*} props
 */
const Layout = (props) => {
    const { navContent, asideContent, avatarImage, classes, children } = props
    const [ navOpen, setNavOpen ] = useState(false)
    const [ profileOpen, setProfileOpen ] = useState(false)
    const [ asideOpen, setAsideOpen ] = useState(false)
    return (
        <div className={classes.out}>
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
                    <div className={classes.linklist}>
                        <Link to="/contact"><Icon icon={faAt}/></Link> <Link to="/about"><Icon icon={faInfo}/></Link>
                        <SearchCompact label='Search'/>
                    </div>
                </CoreArea>
                <FollowingArea>
                    <Button onClick={(e)=>{
                        setProfileOpen(!profileOpen)
                    }}>
                        <Avatar src={avatarImage} alt='R'>R</Avatar>
                    </Button>
                    <Button onClick={(e)=> {
                        setAsideOpen(!asideOpen)
                    }}>
                        <Icon className={classes.icon} icon={faComments}/>
                    </Button>
                </FollowingArea>
            </Hbar>
            <div className={classes.horizon}>
                <Drawer anchor="left" open={navOpen}>
                    <nav className={classes.superNav}>
                        {navContent}
                    </nav>
                </Drawer>
                <main className={classes.core}>
                    {children}
                </main>
                <Drawer anchor="right" open={asideOpen}>
                    <aside className={classes.aside}>
                        {asideContent}
                    </aside>
                </Drawer>
            </div>
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
