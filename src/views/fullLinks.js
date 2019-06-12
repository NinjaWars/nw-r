import React from 'react'
import { faNewspaper, faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const links = [
    {
        icon: <Icon icon={faNewspaper} />,
        url: '/news',
        text: 'News',
    },
    {
        icon: <Icon icon={faBolt} />,
        url: '/fight',
        text: 'Fight',
    },
]

export default links
