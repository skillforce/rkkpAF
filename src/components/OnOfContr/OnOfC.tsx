import React, {useState} from 'react'
import {OfC} from './Of/OfC';
import {OnC} from './On/OnC';
import s from './OnOfC.module.css';
import {IndicatorC} from './indicator/IndicatorC';


const {switcher} = s;

export type SwitcherCPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}


export const SwitcherC = (pr: SwitcherCPropsType) => {

    const {on, setOn} = pr;


    return (
        <div className={switcher}>
            {on && <OnC setOn={setOn} on={true}/>}
            {on && <OfC setOn={setOn} on={false}/>}
            {on && <IndicatorC on={true}/>}
            {!on && <OnC setOn={setOn} on={false}/>}
            {!on && <OfC setOn={setOn} on={true}/>}
            {!on && <IndicatorC on={false}/>}
        </div>

    );

}
