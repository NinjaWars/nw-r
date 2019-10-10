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
import { faBars, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'
import { BrowserRouter } from 'react-router-dom'

import styles from './story.module.css'
import Feedbackify from '../components/Feedbackify/Feedbackify'
import Fbar from '../components/Fbar/Fbar'
import Tile from '../components/Tile/Tile'
import Hbar, {
    LeadingArea,
    CoreArea,
    FollowingArea,
    BreakingLink,
} from '../components/Hbar/Hbar'
import Search, { SearchCompact } from '../components/Search/Search'
import LogoArea from '../components/LogoArea'
import VidOver from '../components/VidOver/VidOver'
import CBot from '../components/CBot/CBot'
import testVideo from '../assets/videos/movie.mp4'
import image from '../images/avatar/sample_gravatar.png'
import loremIpsum from '../data/loremIpsum'
import mockProfile from '../data/mockProfile'
import avatarImage from '../images/avatar/sample_gravatar.png'
//import mockChats from '../../data/mockChats'
import hLinks from '../views/headerLinks'
import lStyles from '../components/Layout/layout.module.css'

mockProfile.avatarUrl = avatarImage // override avatar for mockProfile

/* import { Shuriken } from 'nw-shuriken' */

const PopIt = ({ children }) => {
    return <div className={styles.pop}>{children}</div>
}

PopIt.propTypes = {
    children: proptypes.node.isRequired,
}

addDecorator(storyFn => <CssBaseline>{storyFn()}</CssBaseline>)

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
    .add('with defaults', () => (
        <BrowserRouter>
            <Fbar />
        </BrowserRouter>
    ))
    .add('popped for clarity', () => (
        <BrowserRouter>
            <PopIt>
                <Fbar />
            </PopIt>
        </BrowserRouter>
    ))
    .add('with red text and a blue background', () => (
        <BrowserRouter>
            <Fbar className={styles.fbar} />
        </BrowserRouter>
    ))
    .add('with lorem ipsum content above', () => (
        <BrowserRouter>
            <div>
                <p>{loremIpsum}</p>
            </div>
            <Fbar />
        </BrowserRouter>
    ))

storiesOf('Hbar', module)
    .add('with no content', () => (
        <Hbar className={lStyles.header}>Header Bar</Hbar>
    ))
    .add('with three areas', () => (
        <Hbar className={lStyles.header}>
            <LeadingArea>Left</LeadingArea>
            <CoreArea>Core</CoreArea>
            <FollowingArea>Follow</FollowingArea>
        </Hbar>
    ))
    .add('with some pop', () => (
        <BrowserRouter>
            <PopIt>
                <Hbar className={lStyles.header}>
                    <LeadingArea
                        className={styles.colorful1}
                        onClick={action('the nav would open here')}
                    >
                        <Icon className={lStyles['h-icon']} icon={faBars} />
                    </LeadingArea>
                    <CoreArea className={styles.colorful2}>
                        <Link to="/">
                            <LogoArea shrinkable title="NinjaWars" />
                        </Link>{' '}
                        <span className={lStyles['link-list']}>
                            {hLinks.map(link => (
                                <BreakingLink key={link.url} link={link} />
                            ))}
                        </span>
                        <span className={lStyles['search-area']}>
                            <CBot label="Command" placeholder='enter command...' />
                        </span>
                    </CoreArea>
                    <FollowingArea
                        className={styles.colorful3}
                        onClick={action('The user avatar menu would open here')}
                    >
                        <Button>
                            <Avatar src={mockProfile.avatarUrl} alt="JD">
                                JD
                            </Avatar>
                        </Button>
                        <Button>
                            <Icon
                                className={lStyles['h-icon']}
                                icon={faComments}
                            />
                        </Button>
                    </FollowingArea>
                </Hbar>
            </PopIt>
        </BrowserRouter>
    ))
    .add('with fullish content', () => (
        <BrowserRouter>
            <Hbar className={lStyles.header}>
                <LeadingArea onClick={action('the nav would open here')}>
                    <Icon className={lStyles['h-icon']} icon={faBars} />
                </LeadingArea>
                <CoreArea>
                    <Link to="/">
                        <LogoArea shrinkable title="NinjaWars" />
                    </Link>{' '}
                    <span className={lStyles['link-list']}>
                        {hLinks.map(link => (
                            <BreakingLink key={link.url} link={link} />
                        ))}
                    </span>
                    <span className={lStyles['search-area']}>
                        <SearchCompact label="Search" />
                    </span>
                </CoreArea>
                <FollowingArea
                    onClick={action('The user avatar menu would open here')}
                >
                    <Button>
                        <Avatar src={mockProfile.avatarUrl} alt="JD">
                            JD
                        </Avatar>
                    </Button>
                    <Button>
                        <Icon className={lStyles['h-icon']} icon={faComments} />
                    </Button>
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
    .add('with dark tile', () => (
        <Tile theme="dark">
            <Search label="Search Site" onChange={action('search changed')} />
        </Tile>
    ))
    .add('with slideout', () => (
        <SearchCompact
            label="Search Site"
            onChange={action('search changed')}
        />
    ))
    .add('with pop and compacting for mobile', () => (
        <PopIt>
            <SearchCompact label="Search" onChange={action('search changed')} />
        </PopIt>
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
    .add('all with light tile', () => (
        <Tile theme="light">
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

const sourcePairs = [{ source: testVideo, type: 'video/mp4' }]
storiesOf('VidOver', module).add('with poster', () => (
    <div>
        <VidOver
            style={{ height: '20rem', width: '100vw' }}
            poster={image}
            sourcePairs={sourcePairs}
        >
            top context placeholder text
        </VidOver>
    </div>
))

/*
.storiesOf('Shuriken', module)
    .add('with no props', () => (
        <Shuriken />
    ))
*/

// TODO: Add a news blurb component
