import React from 'react'
import {
    faHome,
    faAt,
    faTasks,
    faInfo,
    faThumbsUp,
    faNewspaper,
    faEdit,
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
        icon: <Icon icon={faTasks} />,
        url: '/rules',
        text: 'Rules',
    },
    {
        icon: <Icon icon={faNewspaper} />,
        url: '/news',
        text: 'News',
    },
    {
        icon: <Icon icon={faEdit} />,
        url: 'http://ninjawars.pbworks.com',
        text: 'Wiki',
    },
    {
        icon: <Icon icon={faThumbsUp} />,
        url: 'https://www.facebook.com/ninjawars.net',
        text: 'Forum',
    },
]

export default links
