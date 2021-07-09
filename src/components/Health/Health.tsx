import React from 'react';
import { makeStyles, LinearProgress, withStyles, Box } from '@material-ui/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

type healthMode = 'dark' | 'light'

interface CharPieces extends Record<string, string|number>{
  health: number,
  totalHealth: number,
}

interface HealthProps {
  className?: string,
  char: CharPieces,
  health?: number, // For entities without a character data set
  height?: number | string
  mode?: healthMode
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  light: {
    colorPrimary:{
      backgroundColor: theme.palette.grey[200],
    },
    colorSecondary: {
      backgroundColor: theme.palette.grey[700],
    }
  },
  dark: {
    colorPrimary:{
      backgroundColor: theme.palette.grey[200],
    },
    colorSecondary: {
      backgroundColor: theme.palette.grey[700],
    }
  }
}))

/**
 * Display a percent bar with the percentage the ninja's health is at 
 */
const HealthLine = ({ className, char, health=undefined, height = '0.3rem', mode='dark' }: HealthProps) => {
  const classes = useStyles()
  const cHealth = char?.health ?? health
  const totalHealth = char?.totalHealth
  const percentage = char && char?.health ? ((cHealth / totalHealth) * 100) : 0
  return (
    <>
      <span className={`health-indicator ${classes[mode]} ${className}`}>
      <Box display="flex" alignItems="center">
        <Box minWidth={35}>
        <Icon icon={faHeart} />{' '}
        </Box>
        <Box width="100%" mr={1}>
          <LinearProgress
            className={`${classes.root} ${className}`}
            variant='determinate'
            color='secondary'
            value={percentage}
            style={height ? { height: height } : {}}
          />
        </Box>
      </Box>
    </span>
    </>
  )
}

export default HealthLine;
