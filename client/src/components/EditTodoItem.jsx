import { useState } from 'react'
import axios from 'axios'

export default function EditTodoItem(props) {

    const [formData, setFormData] = useState({
        title: props.todo.title,
        description: props.todo.description,
        dueDate: props.todo.dueDate
    })

    const editTitle = (e) => {
        setFormData({ ...formData, title: e.target.value })
    }

    const editDescription = (e) => {
        setFormData({ ...formData, description: e.target.value })
    }

    const editDueDate = (e) => {
        setFormData({ ...formData, dueDate: e.target.value })
    }


    function editItem(todoItemId) {
        axios.put(`/api/todo/${todoItemId}`, formData)
            .then(res => {
            })
            .catch(err => console.log(err))
    }


    function submitEdit(e) {
        e.preventDefault()
        editItem(props.todo._id)
        props.updateStatus(false)
        props.getTodos()

    }

    function cancelEdit() {
        props.updateStatus(false)
    }

    return (<div>
        <form onSubmit={submitEdit}>
            <fieldset>
                <input type='text' onChange={editTitle} id="title" value={formData.title}></input>
                <textarea type='text' onChange={editDescription} id="description" value={formData.description}></textarea>
                <label htmlFor="dueDate">Due date:</label>
                <input type='date' onChange={editDueDate} id="dueDate" value={formData.dueDate}></input>
                <button type='submit'>Submit</button>
            </fieldset>
        </form>

        <button onClick={cancelEdit}>Cancel Edit</button>
    </div>)
}