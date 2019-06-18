import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import styles from './search.module.css'

/**
 * Simple Search box
 * @param {*} props
 */
const Search = ({ classes, className, ...rest }) => {
    return (
        <TextField className={cx(className, styles.search)} {...rest} />
    )
}

Search.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
}

Search.defaultProps = {
    classes: {},
}

/**
 * A toggle-expansion wrapper for a search field
 */
const SearchCompact = ({ className, ...rest }) => {
    const [ expanded, setExpanded ] = useState(false)
    const onClick = (e)=>{
        // Toggle the expansion
        setExpanded(!expanded)
    }
    return (
        <div className={cx(styles['search-compact'], className)}>
            <span className={styles['search-compact']}>
                <div className={styles['search-field']}>
                    <Search className={cx({visible: expanded})} {...rest} />
                </div>
                <span className={styles['button-holder']}>
                    <Button onClick={onClick} type='button'>
                        <Icon className={styles.icon} icon={expanded ? faTimes : faSearch}/>
                    </Button>
                </span>
            </span>
        </div>
    )

}

SearchCompact.propTypes = {
    className: PropTypes.string,
}

export { SearchCompact }

export default withStyles(styles)(Search)
