import axios from "axios"
import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import EditTodoItem from "./EditTodoItem"

export default function TodoItem(props) {
    const { todo } = props
    const { getTodos, setForceUpdate } = useContext(TodoContext)

    const [isBeingEdited, setIsBeingEdited] = useState(false)
    const [checked, setIsChecked] = useState(todo.status)

    const formatDate = (date) => {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ]

        return `${months[date.getMonth()]} ${date.getDate()}`

    }

    function deleteItem(todoItemId) {
        axios.delete(`/api/todo/${todoItemId}`)
            .then(res => {
                console.log(res.data)
            })
            .then(setForceUpdate(true))
            .catch(err => console.log(err))
    }

    function handleDelete() {
        deleteItem(todo._id)
    }

    function handleEdit() {
        setIsBeingEdited(true)
    }

    function handleCheck() {
        let reverseValue = !checked
        setIsChecked(reverseValue)
        axios.put(`/api/todo/${todo._id}`, { status: reverseValue })
            .then(res => {
                console.log(res.data)
            })
            .then(setForceUpdate(true))
            .catch(err => console.log(err))
    }


    const todoCard = (<div>

        <h1>{todo.title}</h1>
        <label htmlFor="statusBox">Status: </label>
        <input type="checkbox" checked={checked} id="statusBox" onChange={handleCheck} />
        <p>{todo.description}</p>
        {todo.dueDate ? <span>Due date: {formatDate(new Date(todo.dueDate))} </span> : ""}
        <span>Priority:{todo.priority}</span>
        <span>Category:{todo.category}</span>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>)

    const editForm = <EditTodoItem updateStatus={setIsBeingEdited} todo={todo} getTodos={getTodos} setForceUpdate={setForceUpdate} />
    return (
        isBeingEdited ? editForm : todoCard
    )
}