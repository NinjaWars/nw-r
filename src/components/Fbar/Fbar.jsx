import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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
    }
});

// List of links with urls and content
const fLinks = [
    {
        url: 'http://www.ninjawars.net',
        desc: 'Contact Us'
    },
    {
        url: 'http://www.ninjawars.net',
        desc: 'Home'
    },
    {
        url: 'https://facebook/com/ninjawars',
        desc: 'Forum'
    },
];

/**
 * A sticky footer that can expand upwards
 * @param {*} props
 */
const Fbar = (props) => {
    const { classes } = props;
    return (
        <footer className={classes.footer}>
            <div className={classes.linkList}>
                {fLinks.map((link, index) =>
                    <a href={link.url} key={index}>{link.desc}</a>
                )}
            </div>
            <div className={classes.expandible}>
                <div>
                    Brought to you by <a href='https://bitlucid.com'>BitDog, Ink</a>
                </div>
            </div>
        </footer>
    );
};

export default withStyles(styles)(Fbar);
