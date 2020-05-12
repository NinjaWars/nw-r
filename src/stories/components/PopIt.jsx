import React from 'react'
import PropTypes from 'prop-types'
import styles from '../story.module.css'

// A helper component
const PopIt = ({ children }) => {
    return <div className={styles.pop}>{children}</div>
}

PopIt.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PopIt
