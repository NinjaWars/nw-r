import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import styles from './story.module.css'
import Feedbackify from '../components/Feedbackify/Feedbackify'
import Fbar from '../components/Fbar/Fbar'
import Tile from '../components/Tile/Tile'
/* import { Shuriken } from 'nw-shuriken' */

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ))

storiesOf('Feedbackify', module)
    .add('with initial data', () => (
        <Feedbackify up={7} down={88} />
    ))
    .add('colored 777s', () => (
        <Feedbackify up={777} down={777} className={styles.feedbackify} />
    ))
    .add('with custom toggles', () => (
        <Feedbackify
            className={styles.feedbackify}
            up={0}
            down={0}
            upToggle="Up"
            downToggle="Down"
        />
    ))


storiesOf('Fbar sticky footer', module)
    .add('with red text', () => (
        <Fbar className={styles.fbar}/>
    ))


storiesOf('Tile', module)
    .add('with alternating themes', ()=>(
        <>
        <Tile theme='light'>Light themed</Tile>
        <Tile theme='dark'>Dark themed</Tile>
        <Tile theme='light'>Light themed</Tile>
        </>
    ))
    .add('with dark theme', ()=>(
        <Tile theme='dark'>Dark themed</Tile>
    ))
    .add('with light theme', ()=>(
        <Tile theme='light'>Light themed</Tile>
    ))
/*
.storiesOf('Shuriken', module)
    .add('with no props', () => (
        <Shuriken />
    ))
*/