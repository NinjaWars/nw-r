import React from 'react'
import { faStar, faBolt, faMap, faUsers, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
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
        break: ['lg', 'xl'],
    },
    {
        icon: '石',
        url: '/shop',
        text: 'Shop',
        break: ['lg', 'xl'],
    },
    {
        icon: <Icon icon={faPagelines} />,
        url: '/work',
        text: 'Fields',
        break: ['lg', 'xl'],
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
]

export default links
