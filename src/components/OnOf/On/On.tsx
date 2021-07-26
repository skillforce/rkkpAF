import React from 'react'
import s from './On.module.css';


const {on, onActive} = s;
export type OnType = {
    on: boolean;
    onToOf:(on:boolean)=>void;
}


export const On = (props: OnType) => {
    const {on, onToOf} = props;
    return (
        <div onClick={()=>onToOf(false)}>
            {on && <OnOn/>}
            {!on && <OnOf/>}
        </div>
    )

}

const OnOf = () => {
    return (
        <div className={on}>
            On
        </div>
    )

}

const OnOn = () => {
    return (
        <div className={onActive}>
            On
        </div>
    )

}
