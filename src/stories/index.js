import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

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
import proptypes from 'prop-types'
/* import { Shuriken } from 'nw-shuriken' */

const PopIt = ({ children })=>{
    return (
        <div className={styles.pop}>
            {children}
        </div>
    )

}

PopIt.propTypes = {
    children: proptypes.node.isRequired,
}


storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('hello button clicked')}>Hello Button</Button>
    ))
    .add('with login/signup', ()=>(
        <>
        <Tile theme='dark'>
            <Button variant='outlined' onClick={action('login clicked')}>
                LOGIN
            </Button>{' '}
            <Button variant='outlined' onClick={action('login clicked')}>
                SIGNUP
            </Button>
            <a href='#forgot'>
                Forgot password?
            </a>
        </Tile>
        </>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ))


storiesOf('TextField', module).add('with default look and feel', ()=>(
    <>
        <div><TextField label='Email or Ninja Name' margin="normal"/>{' '}</div>
        <div><TextField label='Password' type='password' autoComplete='current-password' margin="normal"/></div>
    </>
))
    .add('with a dark tile theme', ()=>(
        <Tile theme='dark'>
            <div><TextField label='Email or Ninja Name' margin="normal"/>{' '}</div>
            <div><TextField label='Password' type='password' autoComplete='current-password' margin="normal"/></div>
        </Tile>
    ))

storiesOf('LogoArea', module).add('with a dark tile background', () => (
    <Tile theme="dark">
        <LogoArea className={styles.lightLogo} title="NinjaWars" />
    </Tile>
))
    .add('with a light tile background', () => (
        <Tile theme="light">
            <LogoArea title="NinjaWars" />
        </Tile>
    ))
    .add('with a pop for clarity', () => (
        <Tile theme="light">
            <PopIt>
                <LogoArea title="NinjaWars" />
            </PopIt>
        </Tile>
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

storiesOf('Fbar sticky footer', module).add('with default styles and text', () => (
    <Fbar />
))
    .add('popped for clarity', () => (
        <PopIt>
            <Fbar />
        </PopIt>
    ))
    .add('with red text and a blue background', () => (
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
        <BrowserRouter>
            <Hbar className={styles.header}>
                <Link to="/">
                    <LogoArea title="NinjaWars" />
                </Link>{' '}
                <Link to="/contact">Contact</Link> <Link to="/about">About</Link>
            </Hbar>
        </BrowserRouter>
    ))

storiesOf('Layout', module).add('with simple lorem ipsum', () => (
    <BrowserRouter>
        <Layout>
            <Typography variant='h1' color='primary'>Main Content Area</Typography>
            <Typography variant='h2' color='secondary'>With not much in it</Typography>
            <p>{loremIpsum}</p>
            <Button>A button text</Button>
        </Layout>
    </BrowserRouter>
))


/*
.storiesOf('Shuriken', module)
    .add('with no props', () => (
        <Shuriken />
    ))
*/
