import React, {useEffect, useState} from 'react';
// @ts-ignore
import AnalogClock from 'analog-clock-react';

export const Clock = () => {

    const [date, setDate] = useState(new Date());
    const [btnCheck, setBtnCheck] = useState(true);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            debugger
            clearInterval(intervalId)
        }
    }, [])


    const getTrueTime = (number: number) => {
        return number < 10 ? `0${number}` : number
    }

    const hours = getTrueTime(date.getHours());
    const minutes = getTrueTime(date.getMinutes());
    const seconds = getTrueTime(date.getSeconds());
    let options = {
        width: '300px',
        border: true,
        borderColor: '#2e2e2e',
        baseColor: '#17a2b8',
        centerColor: '#459cff',
        centerBorderColor: '#fff',
        handColors: {
            second: '#d81c7a',
            minute: '#fff',
            hour: '#fff'
        },
        "seconds": seconds,
        "minutes": minutes,
        "hours": hours
    };


    return (<div>
        {btnCheck?
            <button onClick={()=>{setBtnCheck(false)}}>go to analog version</button>
            : <button onClick={()=>{setBtnCheck(true)}}>go to digital version</button>}
        {btnCheck?
            <div>
                {`${hours}-${minutes}-${seconds}`}
            </div>
            : <AnalogClock {...options} />}
        </div>

    )

}