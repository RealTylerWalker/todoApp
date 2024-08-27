import { React, createContext, useEffect, useState } from 'react'
import axios from 'axios'

const TodoContext = createContext()

function TodoContextProvider(props) {

    const [todos, setTodos] = useState([])


    function getTodos() {
        axios.get('/api/todo')
            .then(res => {
                setTodos(res.data)
                console.log(res.data)

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