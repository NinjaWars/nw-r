import React from 'react';
import {
  number,
} from '@storybook/addon-knobs';
import Hbar from './Hbar'
import SInfo from 'stories/components/SInfo'

export default {
  decorators: [
  ],
  title: 'Components|HBar',
};

export const headerBarDisplayArea = () => {
  let displayTimes = number('Display this many times', 3);
  let display = []
  while (displayTimes) {
    display.push(<Hbar></Hbar>)
    displayTimes--
  }
  return (
    <>
      {display}
      <SInfo> Some component displaying here</SInfo >
    </>
  );
};
