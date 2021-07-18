import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from './OnOff'


export default {
    title: 'OnOff',
    component: OnOff
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
    setOn: ()=>{}
};
export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
    setOn: ()=>{}
};
export const ChangeMode: ComponentStory<typeof OnOff> = (args) => {
    let [on, setOn] = useState<boolean>(true)
   return <OnOff {...args} on={on} setOn={setOn} /> }
ChangeMode.args = {

};

