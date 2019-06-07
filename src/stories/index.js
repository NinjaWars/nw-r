import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import styles from './story.module.css'
import Feedbackify from '../components/Feedbackify/Feedbackify'
import Fbar from '../components/Fbar/Fbar'
import Tile from '../components/Tile/Tile'
import Hbar from '../components/Hbar/Hbar'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import LogoArea from '../components/LogoArea'
import loremIpsum from '../data/lorem-ipsum'
import { Link } from 'react-router-dom'
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
        <Feedbackify up={7} down={88} onChange={action('feedback changed')} />
    ))
    .add('with an onchange', () => (
        <Feedbackify
            up={44444}
            down={66666}
            onChange={action('feedback changed')}
        />
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

storiesOf('Fbar sticky footer', module).add('with red text', () => (
    <Fbar className={styles.fbar} />
))

storiesOf('Tile', module)
    .add('with alternating themes', () => (
        <>
            <Tile theme="light">Light themed</Tile>
            <Tile theme="dark">Dark themed</Tile>
            <Tile theme="light">Light themed</Tile>
        </>
    ))
    .add('with dark theme', () => <Tile theme="dark">Dark themed</Tile>)
    .add('with light theme', () => <Tile theme="light">Light themed</Tile>)

storiesOf('Hbar', module)
    .add('with no content', () => <Hbar>Header Bar</Hbar>)
    .add('with a few links', () => (
        <Hbar className={styles.header}>
            <Link to="/">
                <LogoArea title="NinjaWars" />
            </Link>{' '}
            <Link to="/contact">Contact</Link> <Link to="/about">About</Link>
        </Hbar>
    ))

storiesOf('Layout', module).add('with no content', () => (
    <BrowserRouter>
        <Layout>
            <h1>Main Content Area</h1>
            <h2>With not much in it</h2>
            <p>{loremIpsum}</p>
        </Layout>
    </BrowserRouter>
))

storiesOf('LogoArea', module).add('with a dark themed tile background', () => (
    <Tile theme="dark">
        <LogoArea title="NinjaWars" />
    </Tile>
))
/*
.storiesOf('Shuriken', module)
    .add('with no props', () => (
        <Shuriken />
    ))
*/
