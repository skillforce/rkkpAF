import React from 'react'
import s from './Of.module.css';


export type OfType = {
    on: boolean;
    onToOf:(on:boolean)=>void;
}

const {of, ofActive} = s;


export const Of = (props: OfType) => {
    const {on, onToOf} = props;
    return (
        <div onClick={()=>onToOf(true)}>
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
