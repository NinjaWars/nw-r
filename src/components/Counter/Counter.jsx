import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './counter.module.css'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/**
 * Simple upvoter
 */
const Counter = ({ count, className, ...rest })=>{
    return (
        <Button className={cx(className, styles.counter)} {...rest}>
            {count}
            {' '}
            <Icon icon={faArrowUp} />
        </Button>
    )
}

Counter.propTypes = {
    className: PropTypes.string,
    count: PropTypes.number.isRequired,
}

Counter.defaultProps = {
}

export default Counter