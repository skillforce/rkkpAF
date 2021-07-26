import React, {useState, KeyboardEvent, useEffect} from 'react';
import {ItemsType} from '../accordion/accordion';
import s from './Select.module.css';


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

const {select, itemsAll, selected_item} = s;

export function Select(pr: SelectPropsType) {

    let [coll, setColl] = useState<boolean>(false)
    let [val, setVal] = useState<string>('none')
    let [realVal, setRealVal] = useState<string>('none')
    const {items} = pr;

    const CollUnColl = () => {
        setColl(!coll)
    }

    const ValChange = (title: string) => {
        let newVal = title;
        setRealVal(newVal);
        setColl(!coll)
    }
    useEffect(() => {
    }, [])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 1; i < items.length; i++) {
                let whatKeyIs = e.key === 'ArrowDown'
                    ? items[i - 1]
                    : items[i + 1]
                    if (whatKeyIs.title === val) {
                        setVal(whatKeyIs.title)
                        return
                    }
                }
        }
    }

    return (
        <div className={select} onKeyUp={onKeyUp} tabIndex={0}>
            <h2 onClick={CollUnColl}>
                {realVal}
            </h2>
            <div className={itemsAll}>
                {coll && items.map
                (t => <div className={val === t.title ? selected_item : ' '}
                           onClick={() => {
                               ValChange(t.title)
                           }}
                           key={t.value}
                           onMouseEnter={() => {
                               setVal(t.title)
                           }}>
                    {t.title}</div>)}
            </div>
        </div>
    )
}