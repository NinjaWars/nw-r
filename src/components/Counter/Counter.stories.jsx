// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import Counter from '../../components/Counter/Counter'

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

export default {
    title: 'Components|Counter'
}

export const withNoCounterMemory = () => (
    <Counter count={5} />
)

export const withStateCounter = () => (
    <CounterState />
)