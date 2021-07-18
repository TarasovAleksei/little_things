import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UnControlledAccordion} from './UnControlledAccordion'


export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion
} as ComponentMeta<typeof UnControlledAccordion>;


export const ChangeAccordion: ComponentStory<typeof UnControlledAccordion> = (args) => {
    return <UnControlledAccordion {...args}  />
}
ChangeAccordion.args = {
    titleValue: 'Menu'
}


