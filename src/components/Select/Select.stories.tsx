import React, {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';


export default {
    component: Select,
    title: 'Select stories'
}

const callback = action('raiting changed inside component');

export const EmptySelectWithValue = () => {
    const [items, setItems] = useState([
        {value: 1, title: 'Minsk', residents: 10000},
        {value: 2, title: 'Mogilev', residents: 20000},
        {value: 3, title: 'Vitebsk', residents: 25000},
        {value: 4, title: 'Grodno', residents: 12000},
        {value: 5, title: 'Gomel', residents: 13000},
    ])
    return (<Select filter={'All' as const} setItems={setItems} value={'2'} onChange={action('Value Changed')}
                    items={items}/>)
}
export const ExampleSelect1 = () => {
    const [items, setItems] = useState([
        {value: 1, title: 'Minsk', residents: 10000},
        {value: 2, title: 'Mogilev', residents: 20000},
        {value: 3, title: 'Vitebsk', residents: 25000},
        {value: 4, title: 'Grodno', residents: 12000},
        {value: 5, title: 'Gomel', residents: 13000},
    ])
    return (<Select filter={'M' as const} setItems={setItems} onChange={action('Value Changed')} items={items}/>)
}

export const ExampleSelect2 = () => {
    const [items, setItems] = useState([
        {value: 1, title: 'Minsk', residents: 10000},
        {value: 2, title: 'Mogilev', residents: 20000},
        {value: 3, title: 'Vitebsk', residents: 25000},
        {value: 4, title: 'Grodno', residents: 12000},
        {value: 5, title: 'Gomel', residents: 13000},
    ])
    return (<Select filter={'RES' as const} setItems={setItems} onChange={action('Value Changed')} items={items}/>)
}

export const ExampleSelect3 = () => {
    const [items, setItems] = useState([
        {value: 1, title: 'Minsk', residents: 10000},
        {value: 2, title: 'Mogilev', residents: 20000},
        {value: 3, title: 'Vitebsk', residents: 25000},
        {value: 4, title: 'Grodno', residents: 12000},
        {value: 5, title: 'Gomel', residents: 13000},
    ])
    return (<Select filter={'All' as const} setItems={setItems} onChange={action('Value Changed')} items={items}/>)
}