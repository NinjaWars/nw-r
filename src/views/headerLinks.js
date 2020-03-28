import React from 'react'
import {
    faStar,
    faBolt,
    faMap,
    faBox,
    faFistRaised,
    faUsers,
    faClock,
    faEnvelope,
    faToriiGate,
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
        icon: <Icon icon={faBox} />,
        url: '/inventory',
        text: 'Items',
        hiddenOnly: ['xs', 'sm'],
    },
    {
        icon: <Icon icon={faFistRaised} />,
        url: '/skills',
        text: 'Skills',
        hiddenOnly: ['xs', 'sm'],
    },
    {
        icon: <Icon icon={faToriiGate} />,
        url: '/shrine',
        text: 'Shrine',
        hiddenOnly: ['xs', 'sm', 'md'],
    },
    {
        icon: <Icon icon={faUsers} />,
        url: '/clan',
        text: 'Clans',
        hiddenOnly: ['xs', 'sm', 'md', 'lg'],
    },
    {
        icon: '石',
        url: '/shop',
        text: 'Shop',
        hiddenOnly: ['xs', 'sm', 'md', 'lg'],
    },
    {
        icon: <Icon icon={faPagelines} />,
        url: '/work',
        text: 'Fields',
        hiddenOnly: ['xs', 'sm', 'md', 'lg'],
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
