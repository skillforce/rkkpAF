import React from 'react';
import s from './conStar.module.css';
import star from './star.png'
import {RatingValueType} from '../../../App';

const {starOn, starOf} = s;

type ConStarPropsType = {
    setRatingValue: (value: RatingValueType) => void
    selected: boolean
    value: RatingValueType
}


function ConStar(props: ConStarPropsType) {
    const {selected, setRatingValue, value} = props;
    return (
        <div onClick={() => setRatingValue(value)}>
            {selected ? <StarOn/> : <StarOf/>}
        </div>
    )
}


const StarOn = () => {
    return (<img className={starOn} src={star}/>)
}
const StarOf = () => {
    return (<img className={starOf} src={star}/>)
}

export default ConStar;