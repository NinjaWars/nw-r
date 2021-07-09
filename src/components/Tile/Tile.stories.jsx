import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'
import Tile from '../../components/Tile/Tile'
import { select } from '@storybook/addon-knobs'

export default {
    decorators: [
        (storyFn) => <CssBaseline>{storyFn()}</CssBaseline>
    ],
    title: 'Components/Tile'
}

export const withAlternatingThemes = () => (
    <>
        <Tile theme="light">Light themed</Tile>
        <Tile theme="dark">Dark themed</Tile>
        <Tile theme="light">Light themed</Tile>
    </>

)

export const withKnobSwitchableDarkTheme = () => {
    const themeType = select('Theme for tile', ['dark', 'light'], 'dark')
    return (
        <Tile theme={themeType}>{themeType} themed</Tile>
    )
}

export const withLightTheme = () => (
    <Tile theme="light">Light themed</Tile>
)