import { React, createContext, useEffect, useState } from 'react'
import axios from 'axios'

const TodoContext = createContext()

function TodoContextProvider(props) {

    const [todos, setTodos] = useState([])

    function sortData(todos) {
        return todos.sort((a, b) => {
            let aDate = new Date(a.createdAt)
            let bDate = new Date(b.createdAt)

            return bDate - aDate
        })
    }




    function getTodos() {
        axios.get('/api/todo')
            .then(res => {
                setTodos(res.data)
                console.log(sortData(res.data))

            })
            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        getTodos()
    }, [])


    return (
        <TodoContext.Provider
            value={{
                todos,
                getTodos,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )

}
export { TodoContext, TodoContextProvider };