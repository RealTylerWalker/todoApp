import axios from "axios"
import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import EditTodoItem from "./EditTodoItem"

export default function TodoItem(props) {
    const { todo } = props
    const { getTodos } = useContext(TodoContext)

    const [isBeingEdited, setIsBeingEdited] = useState(false)

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
            .catch(err => console.log(err))
    }

    function handleDelete() {
        deleteItem(todo._id)
        getTodos()
    }

    function handleEdit() {
        setIsBeingEdited(true)
    }

    const todoCard = (<div>

        <h1>{todo.title}</h1>
        <input type="checkbox" />
        <p>{todo.description}</p>
        {todo.dueDate ? <span>Due date: {formatDate(new Date(todo.dueDate))} </span> : ""}
        <span>Priority:{todo.priority}</span>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>)

    const editForm = <EditTodoItem updateStatus={setIsBeingEdited} todo={todo} getTodos={getTodos} />
    return (
        isBeingEdited ? editForm : todoCard
    )
}