import React, {useState} from 'react';
import './App.css';
import Accordion from './components/accordion/accordion';
import {Rating} from './components/raiting/raiting';
import {Switcher} from './components/OnOf/OnOf';
import {NewAccordion} from './components/conAcc/newacc';
import ConRating from './components/conRaiting/conRaiting';
import {SwitcherC} from './components/OnOfContr/OnOfC';
import {Clock} from './components/clock/clock';


const onClickCallback = (id: number) => alert(`you type on user #${id}`)

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export let items = [
    {title: 'first Li!', value: 1},
    {title: 'second Li!', value: 2},
    {title: 'third Li!', value: 3},
    {title: 'fourth Li!', value: 4},
]

const App = () => {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accColl, setAccColl] = useState<boolean>(false);
    let [on, setOn] = useState<boolean>(false);
    return (
        <div className={'App'}>
            <NewAccordion titleValue={'Denis'}/>
            <div className="raiting">
                <h2>Your mark?</h2>
                <Rating defaultRating={0}/>
            </div>
            <div className="raiting">
                <h2>Your mark?</h2>
                <ConRating setRatingValue={setRatingValue} ratingValue={ratingValue}/>
            </div>
            <Switcher/>
            <SwitcherC on={on} setOn={setOn}/>
            <Accordion items={items} titleValue={'Denis'} collapsed={accColl} setAccColl={setAccColl}
                       onClick={onClickCallback}/>
            <Clock/>
        </div>
    );
}


export default App;