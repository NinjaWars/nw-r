import React from 'react'
import { TextField } from '@material-ui/core'
import styles from './cbot.module.css'

interface ICBotProps {
    className?: string
    formFields?: {
        noValidate?: boolean
        autoComplete?: string
    }
    [key: string]: any
}

/**
 * A command entry field for inputting various commands to trigger actions
 * @param {*} props
 */
const CBot = ({ className, formFields = { noValidate: true, autoComplete: 'off' }, ...rest }: ICBotProps) => {
    return (
        <form className={`${className} ${styles.cbot}`} {...formFields}>
            <TextField
                {...rest}
            />
        </form>
    )
}

export default CBot