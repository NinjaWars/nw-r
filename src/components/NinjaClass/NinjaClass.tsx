import React from 'react';
import { makeStyles } from '@material-ui/core'
import {ReactComponent as Shuriken} from './shuriken.svg'


export type NinjaClassOption = 'viper' | 'tiger' | 'dragon' | 'crane'

export const NinjaClassList: NinjaClassOption[] = [
    'viper',
    'tiger',
    'dragon',
    'crane',
]


const useStylesNC = makeStyles(({
    viper: {
        color: 'hsl(131.8, 81.3%, 14.7%)',
        backgroundColor: 'hsl(0, 0%, 100%)',
    },
    tiger: {
        color: 'hsl(350.3, 84%, 49%)',
        backgroundColor: 'hsl(0, 0%, 0%)',
    },
    dragon: {
        color: 'hsl(0, 0%, 100%)',
        backgroundColor: 'hsl(0, 0%, 0%)',
    },
    crane: {
        color: 'hsl(183, 95%, 16%)',
        backgroundColor: 'hsl(200, 100%, 81%)',
    },
    shurikenConstraints: {
        '& svg': {
            width: '1.2em',
            height: '1.2em',
            verticalAlign: 'middle',
        },
    },
    all: {
        display:'inline-block',
        paddingLeft: '0.3rem',
        paddingRight: '0.3rem',
        textTransform: 'capitalize',
        fontFamily: 'arial, helvetica, sans-serif',
    }
}))

interface INinjaClassProps {
  className ?: string,
  children: React.ReactNode,
  ninjaClass: NinjaClassOption,
  [key: string]: any,
}

/**
 * Simple way to consistently display a NinjaClass.
 */
const NinjaClass = ({ className, children, ninjaClass, ...rest }: INinjaClassProps) => {
  const classes = useStylesNC()
  return (
    <span className={`${classes[ninjaClass]} ${classes.all}`}>
        <span className={`${classes.shurikenConstraints} svg-shuriken`}>
            <Shuriken/>
        </span>
        {' '}
        {children}
    </span>
  )
}

export default NinjaClass;
