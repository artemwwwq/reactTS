import react, {useCallback, useMemo, useState} from 'react'
import React from "react";

/*
export const Exemple5 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResult = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000){
                fake++
                Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            factorial for a: {resultA}
        </div>
        <div>
            factorial for b: {resultB}
        </div>

    </>

}*/


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('user secret')
    return <div>{
        props.users.map((el, index) => <div key={index}>{el}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    debugger
    console.log('exemple')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Artem', 'Kirill', 'IVAN'])

    const newArray = useMemo(()=>{
       return  users.filter(el=>el.toLowerCase().indexOf('a') > - 1)
    }, [users])

    const addUser = () => {
        const newName = [...users, 'Sveta' + new Date().getDate()]
        setUsers(newName)
    }

    return <>
        <button onClick={()=>{setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>add users</button>
        {counter}
        <Users users={newArray}/>
    </>

}

export const LikesUseCallBack = () => {
    console.log('exemple')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML'])



    const memoizide = useMemo(() => {
        return () => {
            const newName = [...books, 'Angular' + new Date().getDate()]
            setBooks(newName)
        }
    }, [books])

    const memoizide2 = useCallback(()=>{
        const newName = [...books, 'Angular' + new Date().getDate()]
        setBooks(newName)
    }, [books])



    return <>
        <button onClick={()=>{setCounter(counter + 1)}}>+</button>
        {counter}
        <Book addBook={memoizide}/>
    </>

}


const BookSecret = (props: {addBook: ()=> void}) => {
    console.log('Book secret')
    return (
        <div>
            <button onClick={()=>props.addBook()}>add book</button>
        </div>
    )
}

const Book = React.memo(BookSecret)