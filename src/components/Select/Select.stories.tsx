import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';


export default {
    component: Select,
    title: 'Select stories'
}


let itemsForSelect =[
    {value:'1', title:'Minsk'},
    {value:'2', title:'Mogilev'},
    {value:'3', title:'Vitebsk'},
    {value:'4', title:'Grodno'},
    {value:'5', title:'Gomel'},
]


const callback = action('raiting changed inside component');

export const EmptySelectWithValue = () => <Select value={'2'} onChange={action('Value Changed')} items={itemsForSelect} />
export const EmptySelectWithOutValue = () => <Select onChange={action('Value Changed')} items={itemsForSelect} />