import React from 'react'
import {
    faStar,
    faBolt,
    faMap,
    faUsers,
    faClock,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const links = [
    {
        icon: <Icon icon={faStar} />,
        url: '/ninjas',
        text: 'Ninjas',
        hiddenOnly: ['xs', 'sm'],
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
        hiddenOnly: ['xs', 'sm'],
    },
    {
        icon: null,
        url: '/skill',
        text: 'Skills',
        hiddenOnly: ['xs', 'sm'],
    },
    {
        icon: <Icon icon={faUsers} />,
        url: '/clan',
        text: 'Clans',
        hiddenOnly: ['xs', 'sm'],
    },
    {
        icon: '⛩',
        url: '/shrine',
        text: 'Shrine',
        hiddenOnly: ['xs', 'sm', 'md'],
    },
    {
        icon: '石',
        url: '/shop',
        text: 'Shop',
        hiddenOnly: ['xs', 'sm', 'md'],
    },
    {
        icon: <Icon icon={faPagelines} />,
        url: '/work',
        text: 'Fields',
        hiddenOnly: ['xs', 'sm', 'md'],
    },
    {
        icon: <Icon icon={faClock} />,
        url: '/events',
        text: 'Events',
        hiddenOnly: ['xs', 'sm', 'md'],
    },
    {
        icon: <Icon icon={faEnvelope} />,
        url: '/messages',
        text: '',
    },
]

export default links
