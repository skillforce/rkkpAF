import React, {useState} from 'react';
import {ItemsType} from '../accordion/accordion';





type SelectPropsType ={
    value:any
    onChange:(value:any)=>void
    items:ItemsType[]
}



export function Select(pr:SelectPropsType) {



    const [value, setValue] = useState(defaultRating? defaultRating : 0);

    return (<div>
        <div>{}</div>
            {props.items.map(t=><div>{t.title}</div>)}
        </div>
    )
}