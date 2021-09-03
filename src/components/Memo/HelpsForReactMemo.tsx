import React, {useMemo, useState} from 'react'

const UsersSecret = (pr: { users: Array<string> }) => {
    console.log('HelloPidrilla!')
    return <div>
        {pr.users.map((t, i) => <div key={i}>{t}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Olga', 'Ilya', 'Katya'])

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }
    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users]);

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }
        }>+
        </button>
        <button onClick={addUser}>add Sveta</button>
        {counter}
        <Users users={newArr}/>
    </>


}


