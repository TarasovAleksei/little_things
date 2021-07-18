import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion'



export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const collapsedAccordion = Template.bind({});
collapsedAccordion.args = {
titleValue: 'Menu',
    collapsed: true,
    setAccordionCollapsed: (x)=>x
};
export const uncollapsedAccordion = Template.bind({});
uncollapsedAccordion.args = {
    titleValue: 'Menu',
    collapsed: false,
    setAccordionCollapsed: (x)=>x
};
export const ChangeAccordion: ComponentStory<typeof Accordion> = (args:AccordionPropsType) => {
    let [value, setValue]=useState<boolean>(true)
   return <Accordion {...args} collapsed={value} setAccordionCollapsed={()=>{setValue(!value)}} />}
ChangeAccordion.args ={
    titleValue: 'Menu',
};

