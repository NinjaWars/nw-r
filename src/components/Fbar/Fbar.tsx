import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import fLinks from '../../views/footerLinks'
import Tile from '../../components/Tile/Tile'
import version from '../../version'

export interface FbarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string,
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.common.black,
        textAlign: 'center',
        padding: '1rem 0 1rem',
        [theme.breakpoints.up('md')]: {
            padding: '5rem 2rem'
        },
    },
    expandable: {
        [theme.breakpoints.up('md')]: {
            padding: '1rem'
        },
        textAlign: 'center'
    },
    linkList: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        display: 'grid',
        gap: '1.5rem',
        boxSizing: 'border-box',
        paddingBottom: '1rem',
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(5, 1fr)',
            padding: '0 1rem 3rem',
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(8, 1fr)',
            padding: '0 1rem 3rem',
        },
        '& > a': {
            fontFamily: 'verdana, arial, helvetica, sans-serif',
            fontWeight: 'bolder',
            textDecoration: 'none',
            paddingRight: '2rem'
        }
    },
    deEm: {
        color: 'hsl(0, 10%, 40%)'
    }

}))

/**
 * A sticky footer that can expand downwards
 * @param {*} props
 */
const Fbar = ({ className, ...rest }: FbarProps) => {
    const classes = useStyles()
    return (
        <footer className={`${classes.root} ${className}`} {...rest}>
            <div className={classes.linkList}>
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
            <Tile theme='dark' className={classes.expandable}>
                Brought to you by
                {' '}
                <a href="https://bitlucid.com">BitDog Agency</a> &amp; <a href='https://royronalds.com'>Roy Ronalds</a>
                <div>
                    <small className={classes.deEm}>NW Version {version}</small>
                </div>
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

export default Fbar
