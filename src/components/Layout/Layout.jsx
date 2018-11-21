import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { default as Fbar } from '../Fbar/Fbar';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";

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
    }
});

/**
 * A sticky footer that can expand upwards
 * @param {*} props 
 */
const Layout = (props) => {
    const { classes } = props;
    return (
        <div className={classes.out}>
            <header className={classes.header}>
                <a href='/'><img src={logo} className="App-logo" alt="logo" /> NinjaWars</a> <Link to="/contact">Contact</Link> <Link to="/about">About</Link>
            </header>
            <div className={classes.horizon}>
                <nav className={classes.superNav}>
                    Nav
                </nav>
                <main className={classes.core}>
                    {props.children}
                </main>
                <aside className={classes.aside}>
                    Aside
                </aside>
            </div>
            <Fbar />
        </div>
    );
};

export default withStyles(styles)(Layout);
