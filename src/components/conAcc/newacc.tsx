import React, {Dispatch, useReducer} from 'react';
import s from './newacc.module.css';
import {ItemsType} from '../accordion/accordion';
import {reducer} from './reducer';


const {title, btn, accordion} = s;


type AccordionPropsType = {
    titleValue: string;

}

type AccordionTittlePropsType = {
    dispatch: Dispatch<ActionType>
    title: string
    collaps: boolean
}

export type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (id: number) => void
}

export type ActionType = {
    type: string

}


export function NewAccordion(props: AccordionPropsType) {

    const [state, dispatch] = useReducer(reducer, {
        collapsed: false
    });

    const {titleValue} = props;
    return (<div className={accordion}>
        <AccordionTittle dispatch={dispatch} collaps={state.collapsed} title={titleValue}/>
        {state.collapsed && <AccordionBodyC/>}
    </div>)
}


function AccordionTittle(props: AccordionTittlePropsType) {
    const {collaps, dispatch} = props;

    const accCollapsed = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }


    return (
        <h3 onClick={accCollapsed} className={title}>--{props.title}--</h3>
    );

}


function AccordionBodyC() {

    return (<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}



