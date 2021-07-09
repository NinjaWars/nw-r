import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export interface TileProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
    theme?: "dark" | "light",
}

const useStyles = makeStyles(theme => ({
    root: {
        boxSizing: 'border-box',
        padding: '1rem 0',
        [theme.breakpoints.up('md')]: {
            padding: '2rem 2.7rem',
        }
    },
    light: {
        color: 'hsl(210, 11%, 15%)',
        backgroundColor: 'hsl(0, 17%, 95%)',
        '& p': {
            color: 'hsl(210, 11%, 5%) !important',
        }
    },
    dark: {
        color: 'hsl(210, 11%, 85%)',
        backgroundColor: 'hsl(210, 11%, 15%)',
        '& p': {
            color: 'hsl(210, 11%, 95%) !important',
        },
        '& button': {
            color: 'hsl(0, 20%, 94%)',
            border: 'thin solid hsl(0, 0%, 100%, 0.23)',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }
    }
}))

/**
 * A rectangular Tile for layout visual color alternation
 */
const Tile = ({ className, children, theme = 'light', ...rest }: TileProps) => {
    const classes = useStyles()
    const themes = {
        light: classes.light,
        dark: classes.dark
    }
    return (
        <div className={`${classes.root} ${themes[theme]} ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Tile
