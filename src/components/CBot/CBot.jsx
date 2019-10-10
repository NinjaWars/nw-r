import React from 'react'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './cbot.module.css'

/**
 * A command field for inputting various commands to trigger actions
 * @param {*} props
 */
const CBot = ({ className, formFields, ...rest }) => {
    return (
        <form className={cx(className, styles.cbot)} {...formFields}>
            <TextField
                {...rest}
            />
        </form>
    )
}

CBot.propTypes = {
    className: PropTypes.string,
    formFields: PropTypes.shape({})
}

CBot.defaultProps = {
    formFields: {
        noValidate:'noValidate',
        autoComplete: 'off'
    }
}

export default CBot
