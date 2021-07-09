import React from 'react';
import NinjaLevel from './NinjaLevel'

export default {
    title: 'Components/NinjaLevel',
    decorators: [
    ]
};


export const NinjaLevelBasic = (args: any) => {
    return (
        <>
            <NinjaLevel {...args}/>
        </>
    )
}

NinjaLevelBasic.args = {
    className: 'NinjaLevel-custom',
    level: 45
}

export const NinjaLevelAll = (args: any) => {
    const { level, ...rest} = args
    return (
        <>
            {args.levels.map((level:number)=>(
                <div>
                    <NinjaLevel level={level} {...rest}/>
                </div>
            ))}
        </>
    )
}

NinjaLevelAll.args = {
    className: 'NinjaLevel-custom',
    levels: [...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ...Array(71).fill(0).map((_, i) => i * 5)]
}