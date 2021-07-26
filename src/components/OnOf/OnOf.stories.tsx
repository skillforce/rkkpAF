import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Switcher} from './OnOf';

export default {
    component: Switcher,
    title: 'Switcher stories'
}

const callback = action('accordion mode change event fired');

export const SwitcherOnMode = () => <Switcher defaultOn={true} />
export const SwitcherOfMode = () => <Switcher defaultOn={false} />
export const SwitcherDefaultMode = () => <Switcher />
export const DefaultInputValue = () => <input defaultValue={"Yo"} />