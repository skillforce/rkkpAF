import React, {useState} from 'react';
import Star from './star/star';
import s from './raiting.module.css';

const {raiting} = s;

type RatingUncontrolledType ={
    defaultRating:0|1|2|3|4|5
    onChange?:(value:0|1|2|3|4|5)=>void
}



export function Rating(pr:RatingUncontrolledType) {

    const{defaultRating, onChange}=pr;

    const [value, setValue] = useState(defaultRating? defaultRating : 0);

    return (
        <div className={raiting}>
            <Star setValue={()=>{setValue(1)}} selected={value > 0}  />

            <Star setValue={()=>{setValue(2)}} selected={value > 1}/>

            <Star setValue={()=>{setValue(3)}} selected={value > 2}/>

            <Star setValue={()=>{setValue(4)}} selected={value > 3}/>

            <Star setValue={()=>{setValue(5)}} selected={value > 4}/>

        </div>
    )
}
