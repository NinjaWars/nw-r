// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import Counter from '../../components/Counter/Counter'

// eslint-disable-next-line no-unused-vars
import styles from '../../stories/story.module.css'

const CounterState = () => {
    const [count, setCount] = useState(0)
    return (
        <Counter
            count={count}
            onClick={() => {
                setCount(count + 1)
            }}
        />
    )
}

storiesOf('Counter', module)
    .add('with no counter memory', () => <Counter count={5} />)
    .add('with state to count with', () => <CounterState />)
