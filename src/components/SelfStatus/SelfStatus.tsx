import React from 'react';
import { NinjaClass, NinjaClassOption, NinjaLevel } from 'components';
import percentify from 'utils/percentify';

export interface SelfStats {
  class: NinjaClassOption,
  classDisplay: NinjaClassOption,
  level: number,
  kills: number,
}

interface SelfStatusProps {
  stats: SelfStats,
  requirement: number,
  className ?: string,
  children?: React.ReactNode
}

/**
 * Display self info about the Ninja
 */
 const SelfStatus = ({ className, children, stats, requirement }: SelfStatusProps) => {
  const percent = percentify(stats.kills, requirement)
  return (
      <section className={className}>
          <div>Your current class is <NinjaClass ninjaClass={stats.class}>{stats.classDisplay as string}</NinjaClass>.</div>
          <div>Your current level is <NinjaLevel level={stats.level}/>.</div>
          <div>Your current kills are {stats.kills}.</div>
          <div><progress max={requirement} value={percent}/> {percent}%</div>
          <div><NinjaLevel level={stats.level+1}/> level {stats.level+1} requires {requirement} kills.</div>
          {children}
      </section>
  )

}

export default SelfStatus;
