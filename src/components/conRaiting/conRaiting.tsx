import React, {useState} from 'react';
import Star from '../raiting/star/star';
import s from './conRaiting.module.css';
import ConStar from './ConStar/conStar';
import {RatingValueType} from '../../App';

const {raiting} = s;

type ConRatingPropsType = {
    ratingValue: RatingValueType
    setRatingValue: (a: RatingValueType) => void
}


function ConRating(pr: ConRatingPropsType) {
    const {ratingValue, setRatingValue} = pr;


    return (
        <div className={raiting}>
            <ConStar value={1} setRatingValue={setRatingValue} selected={ratingValue > 0}/>
            <ConStar value={2} setRatingValue={setRatingValue} selected={ratingValue > 1}/>
            <ConStar value={3} setRatingValue={setRatingValue} selected={ratingValue > 2}/>
            <ConStar value={4} setRatingValue={setRatingValue} selected={ratingValue > 3}/>
            <ConStar value={5} setRatingValue={setRatingValue} selected={ratingValue > 4}/>

        </div>
    )
}

export default ConRating;