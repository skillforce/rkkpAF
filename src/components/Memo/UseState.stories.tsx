import React, {useEffect, useMemo, useState} from 'react'


export default {
    title:'useEffect demo'
}



export const UseStateExample = () => {

    const [a, setA] = useState(0);
    const [b, setB] = useState(1);


useEffect(()=>{
    console.log('Use Effect!');

    document.title = a.toString();
},[b])


    return <div>
        Hello,{a}{b}
        <button onClick={()=>{setA(a+1)}}>inc.A</button>
        <button onClick={()=>{setB(b+1)}}>inc.B</button>
    </div>
}


export const SetTimeoutExample = () => {

    const [date, setDate] = useState(new Date());
    const [b, setB] = useState(1);


     useEffect(() => {
         const intervalId =setInterval(() => {
             setDate(new Date())
        }, 1000)

        return ()=>{
             debugger
            clearInterval(intervalId)
        }
    }, [])


    const getTrueTime = (number: number) => {
        return number < 10 ? `0${number}` : number
    }

    const hours =  getTrueTime(date.getHours());
    const minutes = getTrueTime(date.getMinutes());
    const seconds = getTrueTime(date.getSeconds());


    return <div>
        {`${hours}-${minutes}-${seconds}`}
    </div>
}



