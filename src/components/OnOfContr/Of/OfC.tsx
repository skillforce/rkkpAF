import React from 'react'
import s from './OfC.module.css';


export type OfType = {
    on: boolean;
    setOn:(on:boolean)=>void;
}

const {of, ofActive} = s;


export const OfC = (props: OfType) => {
    const {on, setOn} = props;
    return (
        <div onClick={()=>setOn(false)}>
            {on && <OfOn/>}
            {!on && <OfOf/>}
        </div>
    )

};

const OfOf = () => {
    return (
        <div className={of}>
            Off
        </div>
    )

}

const OfOn = () => {
    return (
        <div className={ofActive}>
            Off
        </div>
    )

}
