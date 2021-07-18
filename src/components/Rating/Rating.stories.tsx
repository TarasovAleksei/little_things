import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingPropsType, RatingValueType} from './Rating'



export default {
    title: 'Rating',
    component: Rating
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args:RatingPropsType) => <Rating {...args} />;

export const Rating0 = Template.bind({});
Rating0.args = {
    value: 0,
    onClick: (x)=>x
};
export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    onClick: (x)=>x
};
export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    onClick: (x)=>x
};
export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    onClick: (x)=>x
};
export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    onClick: (x)=>x
};
export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    onClick: (x)=>x
};
export const ChangeRating:ComponentStory<typeof Rating> = (args:RatingPropsType) => {
    let [value, setValue]=useState<RatingValueType>(1)
   return <Rating {...args} value={value} onClick={setValue}/>}
ChangeRating.args = {

}
