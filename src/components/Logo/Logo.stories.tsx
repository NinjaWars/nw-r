import React from 'react';
import { select } from '@storybook/addon-knobs';
import Logo from './Logo'
import Tile from 'components/Tile/Tile';
import LogoArea from '../LogoArea';
import PopIt from 'stories/components/PopIt';

export default {
    title: 'Components/Logo',
    decorators: [
    ],
    component: Logo
};


export const LogoAreaBasic = () => {
    return (
        <>
            <Logo className='Logo-custom' />
        </>
    )
}

export const IconLogoDarkTile = () => (
    <Tile theme="dark">
        <LogoArea title="NinjaWars" />
    </Tile>
)

IconLogoDarkTile.story = {
    name: 'with a dark tile background',
}

export const IconLogoLightTile = () => (
    <Tile theme="light">
        <LogoArea title="NinjaWars" />
    </Tile>
)

IconLogoLightTile.story = {
    name: 'with a light tile background',
}

export const IconLogoWithAPopForClarity = () => (
    <Tile theme="light">
        <PopIt>
            <LogoArea title="NinjaWars" />
        </PopIt>
    </Tile>
)

IconLogoWithAPopForClarity.story = {
    name: 'with a pop for clarity',
}