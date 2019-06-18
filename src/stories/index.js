// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
//import { linkTo } from '@storybook/addon-links'
import { Link } from 'react-router-dom'
import proptypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'

import styles from './story.module.css'
import Feedbackify from '../components/Feedbackify/Feedbackify'
import Fbar from '../components/Fbar/Fbar'
import Tile from '../components/Tile/Tile'
import Hbar, {
    LeadingArea,
    CoreArea,
    FollowingArea,
} from '../components/Hbar/Hbar'
import Search, { SearchCompact } from '../components/Search/Search'
import { BrowserRouter } from 'react-router-dom'
import LogoArea from '../components/LogoArea'
import loremIpsum from '../data/loremIpsum'
import avatarImage from '../images/avatar/sample_gravatar.png'
/* import { Shuriken } from 'nw-shuriken' */

const PopIt = ({ children }) => {
    return <div className={styles.pop}>{children}</div>
}

PopIt.propTypes = {
    children: proptypes.node.isRequired,
}

addDecorator((storyFn) => <CssBaseline>{storyFn()}</CssBaseline>)

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('hello button clicked')}>Hello Button</Button>
    ))
    .add('with login/signup', () => (
        <>
            <Tile theme="dark">
                <Button variant="outlined" onClick={action('login clicked')}>
                    LOGIN
                </Button>{' '}
                <Button variant="outlined" onClick={action('login clicked')}>
                    SIGNUP
                </Button>{' '}
                <a href="#forgot">Forgot password?</a>
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

storiesOf('TextField', module)
    .add('with default style', () => (
        <>
            <div>
                <TextField label="Email or Ninja Name" margin="normal" />{' '}
            </div>
            <div>
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
            </div>
        </>
    ))
    .add('with a dark tile theme', () => (
        <Tile theme="dark">
            <div>
                <TextField label="Email or Ninja Name" margin="normal" />{' '}
            </div>
            <div>
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
            </div>
        </Tile>
    ))
    .add('with full signup form', () => (
        <Tile theme="dark">
            <div>
                <TextField label="Email or Ninja Name" margin="normal" />{' '}
            </div>
            <div>
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
            </div>
            <div>
                <Button type="submit">LOGIN</Button>
            </div>
            <div>
                <a href="#assistance">Forgot password?</a>
            </div>
        </Tile>
    ))

storiesOf('LogoArea', module)
    .add('with a dark tile background', () => (
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

storiesOf('Fbar footer bar', module)
    .add('with defaults', () => <Fbar />)
    .add('popped for clarity', () => (
        <PopIt>
            <Fbar />
        </PopIt>
    ))
    .add('with red text and a blue background', () => (
        <Fbar className={styles.fbar} />
    ))
    .add('with lorem ipsum content above', () => (
        <>
            <div>
                <p>{loremIpsum}</p>
            </div>
            <Fbar />
        </>
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
    .add('with no content', () => (
        <Hbar className={styles.header}>Header Bar</Hbar>
    ))
    .add('with three areas', () => (
        <Hbar className={styles.header}>
            <LeadingArea>Le</LeadingArea>
            <CoreArea>Core</CoreArea>
            <FollowingArea>Fo</FollowingArea>
        </Hbar>
    ))
    .add('with some pop', () => (
        <PopIt>
            <Hbar>Header Bar</Hbar>
        </PopIt>
    ))
    .add('with fullish content', () => (
        <BrowserRouter>
            <Hbar className={styles.header}>
                <LeadingArea onClick={action('the nav would open here')}>
                    <Icon icon={faBars} />
                </LeadingArea>
                <CoreArea>
                    <Link to="/">
                        <LogoArea title="NinjaWars" />
                    </Link>{' '}
                    <Link to="/contact">Contact</Link>{' '}
                    <Link to="/about">About</Link>
                </CoreArea>
                <FollowingArea
                    onClick={action('The user avatar menu would open here')}
                >
                    <Avatar src={avatarImage} alt="R">
                        R
                    </Avatar>
                </FollowingArea>
            </Hbar>
        </BrowserRouter>
    ))

storiesOf('Search', module)
    .add('with defaults', () => (
        <Search
            className="some-search-class"
            label="Search Ninja"
            onChange={action('search changed')}
        />
    ))
    .add('with slideout', () => (
        <SearchCompact
            label="Search Site"
            onChange={action('search changed')}
        />
    ))

storiesOf('Typography', module)
    .add('all', () => (
        <>
            <Typography variant="h1">H1 Heading</Typography>
            <Typography variant="h2">H2 Heading</Typography>
            <Typography variant="h3">H3 Heading</Typography>
            <Typography variant="h4">H4 Heading</Typography>
            <Typography variant="h5">H5 Heading</Typography>
            <Typography variant="h6">H6 Heading</Typography>
            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>
            <Typography variant="body1">body1</Typography>
            <Typography variant="body2">body2</Typography>
            <Typography variant="button">button text</Typography>
            <Typography variant="caption">caption text</Typography>
            <span>
                <Typography variant="overline">overline text</Typography>Next to
                non-component text
            </span>
        </>
    ))
    .add('all with dark tile', () => (
        <Tile theme="dark">
            <Typography variant="h1">H1 Heading</Typography>
            <Typography variant="h2">H2 Heading</Typography>
            <Typography variant="h3">H3 Heading</Typography>
            <Typography variant="h4">H4 Heading</Typography>
            <Typography variant="h5">H5 Heading</Typography>
            <Typography variant="h6">H6 Heading</Typography>
            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>
            <Typography variant="body1">body1</Typography>
            <Typography variant="body2">body2</Typography>
            <Typography variant="button">button text</Typography>
            <Typography variant="caption">caption text</Typography>
            <span>
                <Typography variant="overline">overline text</Typography>Next to
                non-component text
            </span>
        </Tile>
    ))

/*
.storiesOf('Shuriken', module)
    .add('with no props', () => (
        <Shuriken />
    ))
*/

// TODO: Add a news blurb component
