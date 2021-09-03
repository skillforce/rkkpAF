import React, {useCallback, useMemo, useState} from 'react'

const BooksSecret = (pr: { books: Array<string> , addBook:()=>void}) => {
    console.log('BooksSecret!')
    return <div>
        <button onClick={()=>{pr.addBook()}}>addBook</button>
        {pr.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecret);

export const UseCallBackLess = () => {
    console.log('HelpsForReactMemo');
    const [counter, setCounter] = useState(0);
    const [book, setBook] = useState(['React', 'JS', 'HTML', 'CSS'])
    const addBook = useCallback(() => {
        setBook([...book, 'Angular' + new Date().getTime()])
    },[book])

    // const addBook = ()=> {
    //     setBook([...book, 'Angular' + new Date().getTime()])
    // }
    //
    // const memoBook = useMemo(()=>{
    //     return addBook
    // } ,[book])

    // const newBook = useMemo(() => {
    //     return book.filter(u => u.toLowerCase().indexOf('a') > -1)
    // }, [book]);

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }
        }>+
        </button>
        {counter}
        <Books addBook={addBook} books={book}/>
    </>




}


