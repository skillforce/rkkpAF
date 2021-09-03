import React, {useState, KeyboardEvent, useEffect, SetStateAction, Dispatch, useCallback} from 'react';
import s from './Select.module.css';


type SelectItemsType ={
    value:number
    title:string
    residents:number

}

type SelectPropsType = {
    filter?:'M'|"RES"|'All'
    value?: any
    onChange: (value: any) => void
    items: SelectItemsType[]
    setItems:Dispatch<SetStateAction<{ value: number; title: string; residents: number; }[]>>
}

const {select, itemsAll, selected_item} = s;


export const CounterMemoTest=()=>{
    const [counter, setCounter] = useState(0);
    return(<div>
        <button onClick={() => {
        setCounter(counter + 1)
    }
    }>+
    </button>
    {counter}
        </div>)
}

export const Select =React.memo(SelectForMemo);

export function SelectForMemo(pr: SelectPropsType) {

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
    },[])

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

    const OnchangeItems = ()=>{
        pr.setItems([...items,{value: 1, title: 'MOSCOW', residents: 100000},])
    }



    const filterMapMemo=useCallback((items:SelectItemsType[],filter:'M'|"RES"|'All')=>{
       pr.onChange('AAAAA');
        switch(filter){
            case 'M':
                return items.map(t => t.title.toLowerCase().indexOf('m')!==-1?<div className={val === t.title ? selected_item : ' '}
                           onClick={() => {
                               ValChange(t.title)
                           }}
                           key={t.value}
                           onMouseEnter={() => {
                               setVal(t.title)
                           }}>
                    {t.title}
                </div>: '')
            case 'RES':
                return items.map(t => t.residents > 11000? <div className={val === t.title ? selected_item : ' '}
                                                                                           onClick={() => {
                                                                                               ValChange(t.title)
                                                                                           }}
                                                                                           key={t.value}
                                                                                           onMouseEnter={() => {
                                                                                               setVal(t.title)
                                                                                           }}>{t.title}</div>: '');
            case 'All':
                return items.map(t => <div className={val === t.title ? selected_item : ' '}
                                                                                   onClick={() => {
                                                                                       ValChange(t.title)
                                                                                   }}
                                                                                   key={t.value}
                                                                                   onMouseEnter={() => {
                                                                                       setVal(t.title)
                                                                                   }}>
                    {t.title}
                </div>)
            default:
                return items.map(t => <div className={val === t.title ? selected_item : ' '}
                                           onClick={() => {
                                               ValChange(t.title)
                                           }}
                                           key={t.value}
                                           onMouseEnter={() => {
                                               setVal(t.title)
                                           }}>
                    {t.title}
                </div>)
        }
        },[items])






    return (
        <div>
            <div>
                <button onClick={OnchangeItems}>add USER</button>
            </div>
        <div className={select} onKeyUp={onKeyUp} tabIndex={0}>
            <h2 onClick={CollUnColl}>
                {realVal}
            </h2>
            <div className={itemsAll}>
                {coll && pr.filter && filterMapMemo(items,pr.filter)}
            </div>

            <CounterMemoTest/>
        </div>
        </div>
    )
}