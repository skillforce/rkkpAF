import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {PageTitle} from './tittle';

export default {
    component: PageTitle,
    title: 'Tittle stories'
}

const callback = action('accordion mode change event fired');

export const TitleMode = () => <PageTitle tittle={'Kyky epta'} />