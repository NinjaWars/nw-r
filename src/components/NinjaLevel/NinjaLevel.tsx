import { makeStyles } from '@material-ui/core';
import React from 'react';
import camelCase from 'utils/camelCase';

interface NinjaLevelProps {
  level: number,
  className ?: string,
  [key: string]: any,
}

export type ninjaLevelTier = 'Novice' | 'Acolyte' | 'Ninja' | 'Elder Ninja' | 'Shadow Master'
export type ninjaLevelClasses = 'novice' | 'acolyte' | 'ninja' | 'elderNinja' | 'shadowMaster'

const tiers: Record<number, ninjaLevelTier> = {
  0: 'Novice',
  2: 'Acolyte',
  6: 'Ninja',
  31: 'Elder Ninja',
  101: 'Shadow Master',
}

const useStyles = makeStyles(()=>({
  novice:{
    color:'black',
    backgroundColor:'rgb(238, 238, 238, 0.4)',
  },
  acolyte:{
    color:'black',
    backgroundColor:'DarkGray',
  },
  ninja: {
    color:'#e30303',
    backgroundColor:'black'
  },
  elderNinja: {
    color:'#d99868',
    backgroundColor:'#8B0000',
  },
  shadowMaster: {
    color:'#b92703',
    backgroundColor:'#020000'
  },
  basic: {
  }
}))

/**
 * The different level tiers of ninjas after they level up
 */
const NinjaLevel = ({ className, level }: NinjaLevelProps) => {
  const classes = useStyles()
  // fold the tiers down based on the incoming level until you get the highest
  const tier = Object.entries(tiers).reduce((acc, [clevel, tier])=>{
    return (level>=(+clevel)) ? tier : acc
  }, tiers[0])
  return (
    <span className={`${classes.basic} ${classes[camelCase(tier) as ninjaLevelClasses]} ${className}`}>
      {tier} [{level}]
    </span>
  )
}

export default NinjaLevel;
