import React from 'react'
import {
    faHome,
    faAt,
    faInfo,
    faThumbsUp,
    faNewspaper,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const links = [
    {
        icon: <Icon icon={faHome} />,
        url: '/',
        text: 'Home',
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
    {
        icon: <Icon icon={faThumbsUp} />,
        url: 'https://facebook.com/ninjawars.net',
        text: 'Forum',
    },
    {
        icon: <Icon icon={faNewspaper} />,
        url: '/news',
        text: 'News',
    },
]

export default links
