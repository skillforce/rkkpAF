import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Rating} from './raiting';


export default {
    component: Rating,
    title: 'RatingUncontroled stories'
}

const callback = action('raiting changed inside component');

export const Rating1Mode = () => <Rating defaultRating ={0} onChange={callback} />
export const Rating2Mode = () => <Rating defaultRating ={1} onChange={callback} />
export const Rating3Mode = () => <Rating defaultRating ={2} onChange={callback} />
export const Rating4Mode = () => <Rating defaultRating ={3} onChange={callback} />
export const Rating5Mode = () => <Rating defaultRating ={4} onChange={callback} />
export const Rating6Mode = () => <Rating defaultRating ={5} onChange={callback} />

