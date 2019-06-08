import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Fbar from '../Fbar/Fbar'
import Tile from '../Tile/Tile'
import Hbar from '../Hbar/Hbar'
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
        backgroundColor: 'black',
        height: '5%',
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
    const { classes, children } = props
    return (
        <div className={classes.out}>
            <Hbar className={classes.header}>
                <Link to="/">
                    <LogoArea title="NinjaWars"/>
                </Link>
                {' '}
                <Link to="/contact">Contact</Link>
                {' '}
                <Link to="/about">About</Link>
            </Hbar>
            <div className={classes.horizon}>
                <nav className={classes.superNav}>
                    Nav
                </nav>
                <main className={classes.core}>
                    {children}
                </main>
                <aside className={classes.aside}>
                    Aside
                </aside>
            </div>
            <Tile theme='dark'>
                Bottom Tile
            </Tile>
            <Fbar />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Layout)
