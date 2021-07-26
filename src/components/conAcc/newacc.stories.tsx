import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {NewAccordion} from './newacc'


export default {
    component: NewAccordion,
    title: 'NewAccordion stories'
}

const callback = action('accordion mode change event fired');

export const TitleMode = () => <NewAccordion titleValue={'Hello'}/>;
