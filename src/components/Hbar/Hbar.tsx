import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Button, Hidden } from '@material-ui/core'


import styles from './hbar.module.css'

export interface HbarProps extends React.HTMLAttributes<HTMLElement> {
    className?: string
    children: React.ReactNode
    classes?: any
}

/**
 * Header Bar, for housing top menu buttons links and logo
 */
const Hbar = ({ className, children, classes, ...rest }: HbarProps) => {
    return (
        <header className={`${styles.hbar} ${className}`} {...rest}>
            {children}
        </header>
    )
}

interface LeadingAreaProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode
    onClick: () => void
}

/**
 * Leading area of the header bar, generally for the hamburger menu
 */
const LeadingArea = ({ onClick, children, className }: LeadingAreaProps) => {
    return (
        <div className={`${styles.leader} ${className}`}>
            <Button onClick={onClick}>
                {children}
            </Button>
        </div>
    )
}

/**
 * Following area of the header bar, generally for the avatar menu and aside opener
 */
const FollowingArea = ({ children, className, ...rest }: { classname?: string, children: React.ReactNode, [key: string]: any }) => {
    return (
        <div className={`${styles.follower} ${className}`} {...rest}>
            {children}
        </div>
    )
}

/**
 * Following area of the header bar, generally for the avatar menu
 */
const CoreArea = ({ children, className, ...rest }: { [key: string]: any }) => {
    return (
        <div className={`${styles.core} ${className}`} {...rest}>
            {children}
        </div>
    )
}

export interface BreakingLinkProps {
    link: {
        url: string,
        text: string,
        icon: React.ReactNode,
        hiddenOnly?: any
    }
}

/**
 * Wrap links in breakpoints as needed
 */
const BreakingLink = ({ link }: BreakingLinkProps) => {
    const Cont = <><Link to={link.url}>{link.icon} {link.text}</Link>{' '}</>
    // Hide at certain breakpoints
    const Final = link.hiddenOnly ? <Hidden only={link.hiddenOnly}>{Cont}</Hidden> : Cont
    return Final
}

export { LeadingArea, CoreArea, FollowingArea, BreakingLink }

// @ts-ignore
export default withStyles(styles)(Hbar)
