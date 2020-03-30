import React from 'react'
import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs';
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import { faBars, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'
import { BrowserRouter } from 'react-router-dom'

import styles from '../../stories/story.module.css'
import Hbar, {
  LeadingArea,
  CoreArea,
  FollowingArea,
  BreakingLink,
} from 'components/Hbar/Hbar'
import { SearchCompact } from 'components/Search/Search'
import LogoArea from 'components/LogoArea'
import CBot from 'components/CBot/CBot'
import mockProfile from 'data/mockProfile'
import avatarImage from 'images/avatar/sample_gravatar.png'
//import mockChats from '../../data/mockChats'
import hLinks from 'views/headerLinks'
import lStyles from 'components/Layout/layout.module.css'
import SInfo from 'stories/components/SInfo'
import PopIt from 'stories/components/PopIt'

mockProfile.avatarUrl = avatarImage // override avatar for mockProfile

export default {
  decorators: [
    (storyFn) => <CssBaseline>{storyFn()}</CssBaseline>
  ],
  title: 'Components|HBar',
};

export const hBarArea = () => {
  let displayTimes = number('Display this many times', 3);
  let display = []
  while (displayTimes > 0) {
    display.push(<Hbar className={lStyles.header}>Header Bar</Hbar>)
    displayTimes--
  }
  return (
    <>
      <SInfo> Multiple renders of the component below</SInfo >
      {display}
    </>
  );
};

hBarArea.story = {
  title: 'HBar Rendering'
}

export const WithNoContent = () => (
  <Hbar className={lStyles.header}>Header Bar</Hbar>
)

WithNoContent.story = {
  name: 'with no content',
}

export const WithThreeAreas = () => (
  <Hbar className={lStyles.header}>
    <LeadingArea>Left</LeadingArea>
    <CoreArea>Core</CoreArea>
    <FollowingArea>Follow</FollowingArea>
  </Hbar>
)

WithThreeAreas.story = {
  name: 'with three areas',
}

export const WithSomePop = () => (
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
            {hLinks.map((link) => (
              <BreakingLink key={link.url} link={link} />
            ))}
          </span>
          <span className={lStyles['search-area']}>
            <CBot label="Command" placeholder="enter command..." />
          </span>
        </CoreArea>
        <FollowingArea
          className={styles.colorful3}
          onClick={action('The user avatar menu would open here')}
        >
          <Avatar src={mockProfile.avatarUrl} alt="JD">
            JD
                  </Avatar>
          <Button>
            <Icon className={lStyles['h-icon']} icon={faComments} />
          </Button>
        </FollowingArea>
      </Hbar>
    </PopIt>
  </BrowserRouter>
)


export const WithFullishContent = () => (
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
          {hLinks.map((link) => (
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
)
