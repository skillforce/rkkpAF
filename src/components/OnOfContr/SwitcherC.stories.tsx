import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

import {SwitcherC} from './OnOfC'

export default {
    component: SwitcherC,
    title: 'SwitcherC stories'
}

const callback= action('on or of was clicked');

export const OnModeSwitcher = () => <SwitcherC on={true} setOn={callback}/>;
export const OfModeSwitcher = () => <SwitcherC on={false} setOn={callback}/>;
export const ChangedSwitcher = () => {

    const [on, setOn] = useState<boolean>(true)
    return <SwitcherC on={on} setOn={setOn}/>
};