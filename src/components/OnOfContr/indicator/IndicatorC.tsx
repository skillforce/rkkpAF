import React from 'react'
import s from './IndicatorC.module.css';


type  IndicatorType ={
    on:boolean;
}


const {of, on, indicator} = s;


export const IndicatorC = (props: IndicatorType) => {
    const {on} = props;
    return (
        <div className={indicator}>
            {on &&  <IndOn/>}
            {!on && <IndOf/>}
        </div>
    )

}

const IndOf = () => {
    return (
        <div className={of}>
        </div>
    )

}

const IndOn = () => {
    return (
        <div className={on}>

        </div>
    )

}
