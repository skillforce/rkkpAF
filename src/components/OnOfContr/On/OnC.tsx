import React from 'react'
import s from './OnC.module.css';


const {on, onActive} = s;
export type OnType = {
    on: boolean;
    setOn:(on:boolean)=>void;
}


export const OnC = (props: OnType) => {
    const {on, setOn} = props;
    const onClicked=()=>{
        setOn(true);
    }

    return (
        <div onClick={onClicked}>
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
