import React, {useState} from 'react';

import ConRating from './conRaiting';
import {RatingValueType} from '../../App';

export default {
    component: ConRating,
    title: 'Rating stories'
}

export const EmptyRating = () => <ConRating ratingValue={0} setRatingValue={x => x}/>;
export const Rating1 = () => <ConRating ratingValue={1} setRatingValue={x => x}/>;
export const Rating2 = () => <ConRating ratingValue={2} setRatingValue={x => x}/>;
export const Rating3 = () => <ConRating ratingValue={3} setRatingValue={x => x}/>;
export const Rating4 = () => <ConRating ratingValue={4} setRatingValue={x => x}/>;
export const Rating5 = () => <ConRating ratingValue={5} setRatingValue={x => x}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(5)


    return <ConRating ratingValue={rating} setRatingValue={setRating}/>;
}

