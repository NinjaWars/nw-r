// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import { action } from '@storybook/addon-actions'
//import { linkTo } from '@storybook/addon-links'
//import { Link } from 'react-router-dom'
//import proptypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
//import { faBars, faComments } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'
import { BrowserRouter } from 'react-router-dom'

import styles from './story.module.css'
import Feedbackify from '../components/Feedbackify/Feedbackify'
import Fbar from '../components/Fbar/Fbar'
import Tile from '../components/Tile/Tile'
import Search, { SearchCompact } from '../components/Search/Search'
import LogoArea from '../components/LogoArea'
import VidOver from '../components/VidOver/VidOver'
import testVideo from '../assets/videos/movie.mp4'
import image from '../images/avatar/sample_gravatar.png'
import loremIpsum from '../data/loremIpsum'
import mockProfile from '../data/mockProfile'
import avatarImage from '../images/avatar/sample_gravatar.png'
//import mockChats from '../../data/mockChats'
import PopIt from './components/PopIt'
// import { Shuriken } from 'nw-shuriken'

mockProfile.avatarUrl = avatarImage // override avatar for mockProfile


export default {
    title: 'Components|General',
    decorators: [(storyFn) => <CssBaseline>{storyFn()}</CssBaseline>],
}

/*
export default {
    title: 'Button',
};
*/

export const WithText = () => (
    <Button onClick={action('hello button clicked')}>Hello Button</Button>
)

WithText.story = {
    name: 'with text',
}

export const WithLoginSignup = () => (
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
)

WithLoginSignup.story = {
    name: 'with login/signup',
}

export const WithSomeEmoji = () => (
    <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
)

WithSomeEmoji.story = {
    name: 'with some emoji',
}

/*
export default {
    title: 'TextField',
};
*/

export const WithDefaultStyle = () => (
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
)

WithDefaultStyle.story = {
    name: 'with default style',
}

export const WithADarkTileTheme = () => (
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
)

WithADarkTileTheme.story = {
    name: 'with a dark tile theme',
}

export const WithFullSignupForm = () => (
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
)

WithFullSignupForm.story = {
    name: 'with full signup form',
}

/*
export default {
    title: 'LogoArea',
};
*/

export const WithADarkTileBackground = () => (
    <Tile theme="dark">
        <LogoArea className={styles.lightLogo} title="NinjaWars" />
    </Tile>
)

WithADarkTileBackground.story = {
    name: 'with a dark tile background',
}

export const WithALightTileBackground = () => (
    <Tile theme="light">
        <LogoArea title="NinjaWars" />
    </Tile>
)

WithALightTileBackground.story = {
    name: 'with a light tile background',
}

export const WithAPopForClarity = () => (
    <Tile theme="light">
        <PopIt>
            <LogoArea title="NinjaWars" />
        </PopIt>
    </Tile>
)

WithAPopForClarity.story = {
    name: 'with a pop for clarity',
}

/*
export default {
    title: 'Feedbackify',
};
*/

export const WithInitialData = () => (
    <Feedbackify up={7} down={88} onChange={action('feedback changed')} />
)

WithInitialData.story = {
    name: 'with initial data',
}

export const WithAnOnchange = () => (
    <Feedbackify
        up={44444}
        down={66666}
        onChange={action('feedback changed')}
    />
)

WithAnOnchange.story = {
    name: 'with an onchange',
}

export const Colored777S = () => (
    <Feedbackify up={777} down={777} className={styles.feedbackify} />
)

Colored777S.story = {
    name: 'colored 777s',
}

export const WithCustomToggles = () => (
    <Feedbackify
        className={styles.feedbackify}
        up={0}
        down={0}
        upToggle="Up"
        downToggle="Down"
    />
)

WithCustomToggles.story = {
    name: 'with custom toggles',
}

/*
export default {
    title: 'Fbar footer bar',
};
*/

export const WithDefaults = () => (
    <BrowserRouter>
        <Fbar />
    </BrowserRouter>
)

WithDefaults.story = {
    name: 'with defaults',
}

export const PoppedForClarity = () => (
    <BrowserRouter>
        <PopIt>
            <Fbar />
        </PopIt>
    </BrowserRouter>
)

PoppedForClarity.story = {
    name: 'popped for clarity',
}

export const WithRedTextAndABlueBackground = () => (
    <BrowserRouter>
        <Fbar className={styles.fbar} />
    </BrowserRouter>
)

WithRedTextAndABlueBackground.story = {
    name: 'with red text and a blue background',
}

export const WithLoremIpsumContentAbove = () => (
    <BrowserRouter>
        <div>
            <p>{loremIpsum}</p>
        </div>
        <Fbar />
    </BrowserRouter>
)

WithLoremIpsumContentAbove.story = {
    name: 'with lorem ipsum content above',
}

/*
export default {
    title: 'Search',
};
*/

export const _WithDefaults = () => (
    <Search
        className="some-search-class"
        label="Search Ninja"
        onChange={action('search changed')}
    />
)

_WithDefaults.story = {
    name: 'with defaults',
}

export const WithDarkTile = () => (
    <Tile theme="dark">
        <Search label="Search Site" onChange={action('search changed')} />
    </Tile>
)

WithDarkTile.story = {
    name: 'with dark tile',
}

export const WithSlideout = () => (
    <SearchCompact label="Search Site" onChange={action('search changed')} />
)

WithSlideout.story = {
    name: 'SearchCompact|with slideout',
}

export const WithPopAndCompactingForMobile = () => (
    <PopIt>
        <SearchCompact label="Search" onChange={action('search changed')} />
    </PopIt>
)

WithPopAndCompactingForMobile.story = {
    name: 'with pop and compacting for mobile',
}

/* ============= Show Typography for the Site ================= */

export const AllTypography = () => (
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
)

AllTypography.story = {
    name: 'Typography| All'
}

export const AllTypographyOnDarkTile = () => (
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
)

AllTypographyOnDarkTile.story = {
    name: 'Typography|on dark tile'
}

export const AllTypographyOnLightTile = () => (
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
)

AllTypographyOnLightTile.story = {
    name: 'Typography|on light tile'
}

/*
export default {
    title: 'VidOver',
};
*/

const sourcePairs = [{ source: testVideo, type: 'video/mp4' }]

export const WithPoster = () => (
    <div>
        <VidOver
            style={{ height: '20rem', width: '100vw' }}
            poster={image}
            sourcePairs={sourcePairs}
        >
            top context placeholder text
        </VidOver>
    </div>
)

WithPoster.story = {
    name: 'with poster',
}

/*
export const ShurikenArea = () => (
    <Shuriken />
)
*/
