import React from 'react'
import {
    faNewspaper,
    faBolt,
    faInfo,
    faAt,
    faMap,
    faBox,
    faUsers,
    faClock,
    faEnvelope,
    faArrowRight,
    faFistRaised,
} from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const links = [
    {
        icon: <Icon icon={faBolt} />,
        url: '/fight',
        text: 'Fight',
    },
    {
        icon: <Icon icon={faMap} />,
        url: '/map',
        text: 'Map',
    },
    {
        icon: <Icon icon={faBox} />,
        url: '/inventory',
        text: 'Items',
    },
    {
        icon: <Icon icon={faFistRaised} />,
        url: '/skills',
        text: 'Skills',
    },
    {
        icon: <Icon icon={faUsers} />,
        url: '/clan',
        text: 'Clan',
    },
    {
        icon: '⛩',
        url: '/shrine',
        text: 'Shrine',
    },
    {
        icon: '石',
        url: '/shop',
        text: 'Shop',
    },
    {
        icon: <Icon icon={faPagelines} />,
        url: '/field',
        text: 'Fields',
    },
    {
        icon: <Icon icon={faClock} />,
        url: '/events',
        text: 'Events',
    },
    {
        icon: <Icon icon={faStar} />,
        url: '/list',
        text: 'Ninjas',
    },
    {
        icon: <Icon icon={faEnvelope} />,
        url: '/messages',
        text: 'Messages',
    },
    {
        icon: <Icon icon={faNewspaper} />,
        url: '/news',
        text: 'News',
    },
    {
        icon: <Icon icon={faInfo} />,
        url: '/about',
        text: 'About',
    },
    {
        icon: <Icon icon={faArrowRight} />,
        url: '/intro',
        text: 'Intro',
    },
    {
        icon: <Icon icon={faAt} />,
        url: '/contact',
        text: 'Contact',
    },
]

export default links
