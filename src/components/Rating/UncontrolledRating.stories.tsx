import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UnControlledRating} from './UnControlledRating'


export default {
    title: 'UnControlledRating',
    component: UnControlledRating
} as ComponentMeta<typeof UnControlledRating>;

export const ChangeRating: ComponentStory<typeof UnControlledRating> = () => {

    return <UnControlledRating/>
}

