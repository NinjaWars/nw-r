import React from 'react'
import { faStar, faBolt, faMap, faUsers, faPagelines, faAt, faClock, faInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const links = [
    {
        icon: <Icon icon={faStar} />,
        url: '/ninjas',
        text: 'Ninjas',
    },
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
        icon: null,
        url: '/inventory',
        text: 'Items',
    },
    {
        icon: null,
        url: '/skill',
        text: 'Skills',
    },
    {
        icon: <Icon icon={faUsers} />,
        url: '/clan',
        text: 'Clans',
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
        url: '/work',
        text: 'Fields',
    },
    {
        icon: <Icon icon={faClock} />,
        url: '/events',
        text: 'Events',
    },
    {
        icon: <Icon icon={faEnvelope} />,
        url: '/messages',
        text: 'Messages',
    },
    {
        icon: <Icon icon={faInfo} />,
        url: '/about',
        text: 'About',
    },
    {
        icon: <Icon icon={faAt} />,
        url: '/contact',
        text: 'Contact',
    },
]

export default links
