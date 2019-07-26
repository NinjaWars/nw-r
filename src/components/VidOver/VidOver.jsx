import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './video-overlay.module.css'

/**
 * A video overlay area for a video background with content on top.
 * @param {*} props
 */
const VidOver = ({ sourcePairs, poster, classes, className, children, ...rest }) => {
    return (
        <div className={cx(className, styles.banner)} {...rest}>
            <video autoPlay loop muted poster={poster} className={styles['banner-video']}>
                {sourcePairs && sourcePairs.map((vid)=>(
                    <source key={vid.source} src={vid.source} type={vid.type} />
                ))}
                Cannot play video.
            </video>
            {children}
        </div>
    )
}

VidOver.propTypes = {
    sourcePairs: PropTypes.array.isRequired,
    posters: PropTypes.string,
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

VidOver.defaultProps = {
    classes: {},
}

export default withStyles(styles)(VidOver)
