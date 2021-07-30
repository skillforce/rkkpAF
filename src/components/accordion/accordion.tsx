import React from 'react';
import s from './accordion.module.css';
import {items} from '../../App';
import {AccordionBodyPropsType} from '../conAcc/newacc';


export type AccordionPropsType = {
    /**
     * According title name
     */
    titleValue: string;
    /**
     * is the accordion collapsed?
     */
    collapsed: boolean;
    /**
     * Elements that are showed
     */
    setAccColl: (x: boolean) => void;
    items: ItemsType[]
    onClick: (id:number) => void
}

export type ItemsType = {
    title: string
    value: number
}


export type AccordionTittlePropsType = {
    title: string;
    setAccColl: (x: boolean) => void;
    collapsed: boolean

}


function Accordion(props: AccordionPropsType) {
    const {collapsed, setAccColl, onClick} = props;
    const {acc} = s;
    return (<div className={acc}>
        <AccordionTittle collapsed={collapsed} setAccColl={setAccColl} title={props.titleValue}/>
        {!collapsed && <AccordionBody onClick={onClick}  items={items}/>}
    </div>)
}


function AccordionTittle(props: AccordionTittlePropsType) {
    const {setAccColl, collapsed} = props;
    const {acc_title} = s;
    return <h3 className={acc_title} onClick={() => {
        setAccColl(!collapsed)
    }
    }>--{props.title}--</h3>
}


function AccordionBody(pr: AccordionBodyPropsType) {
    const {items, onClick} = pr;
    const allLi = items.map((t, index) => <li key={t.value} onClick={() => {
        onClick(t.value)
    }}>{t.title}</li>)
    return (
        <ul>
            {allLi}
        </ul>
    )
}


export default Accordion;

