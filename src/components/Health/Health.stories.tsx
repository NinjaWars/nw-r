import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import Health from './Health'
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme'
import Tile from 'components/Tile/Tile';
import { Story, Meta } from '@storybook/react'

export default {
    title: 'Components/Health',
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story/>
            </ThemeProvider>
        )
    ]
} as Meta;


export const withSmallFraction = (args:any) => {
    return (
        <>
            Healthbar:
            <div>
                <Health className='Health-custom' {...args}/>
            </div>
        </>
    )
}

withSmallFraction.args = {
    health: 44,
    totalHealth: 450,
    char: {
        health: 44,
        totalHealth: 450
    },
    height: '1rem'
}

export const onDark = (args:any) => {
    return (
        <>
            Healthbar on dark background:
            <div>
                <Tile theme='dark'>
                    <Health className='Health-custom' {...args}/>
                </Tile>
            </div>
        </>
    )
}
onDark.args = {
    health: 44,
    totalHealth: 450,
    char: {
        health: 44,
        totalHealth: 450
    },
    height: '1rem'
}