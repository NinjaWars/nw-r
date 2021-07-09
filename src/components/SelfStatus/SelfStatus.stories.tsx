import { NinjaClassOption } from 'components';
import { NinjaClassList } from 'components/NinjaClass/NinjaClass';
import React from 'react';
import SelfStatus from './SelfStatus'

export default {
    title: 'Components/SelfStatus',
    decorators: [
    ]
};

const mockSelfStats = {
    class: 'tiger' as NinjaClassOption,
    classDisplay: 'Tiger',
    level: 45,
    kills: 2354
}

export const SelfStatusBasic = (args: any) => {
    return (
        <>
            <SelfStatus {...args}/>
        </>
    )
}

SelfStatusBasic.args = {
    stats: mockSelfStats,
    requirement: 55,
    className: 'SelfStatus-custom'
}

SelfStatusBasic.argTypes = {
    ninjaClass: { control: { type: "select", options: NinjaClassList } },
}