import React, {useState} from 'react';
import s from './newacc.module.css';
import {ItemsType} from '../accordion/accordion';
import {HandlerFunction} from '@storybook/addon-actions';

const {title, btn, accordion} = s;


type AccordionPropsType = {
    titleValue: string;

}

type AccordionTittlePropsType = {
    title: string
    collaps: boolean
    setCollaps: (collaps: boolean) => void
}

export type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: string) => void
}


export function NewAccordion(props: AccordionPropsType) {

    const [collaps, setCollaps] = useState(false);

    const {titleValue} = props;
    return (<div className={accordion}>
        <AccordionTittle collaps={collaps} setCollaps={setCollaps} title={titleValue}/>
        {collaps && <AccordionBodyC/>}
    </div>)
}


function AccordionTittle(props: AccordionTittlePropsType) {
    const {setCollaps, collaps} = props;

    const accCollapsed = () => {
        setCollaps(!collaps)
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
        </ul>
    )
}



