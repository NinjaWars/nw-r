import React from 'react'
import { faNewspaper, faBolt, faInfo, faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const links = [
    {
        icon: <Icon icon={faBolt} />,
        url: '/fight',
        text: 'Fight',
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
        icon: <Icon icon={faAt} />,
        url: '/contact',
        text: 'Contact',
    },
]

export default links
