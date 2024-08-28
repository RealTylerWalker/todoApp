import { useState } from 'react'
import axios from 'axios'

export default function EditTodoItem(props) {

    const [formData, setFormData] = useState({
        title: props.todo.title,
        description: props.todo.description,
        dueDate: props.todo.dueDate,
        category: props.todo.category,
        priority: props.todo.priority
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

    const editCategory = (e) => {
        setFormData({ ...formData, category: e.target.value })
    }

    const editPriority = (e) => {
        setFormData({ ...formData, priority: e.target.value })
    }


    function editItem(todoItemId) {
        axios.put(`/api/todo/${todoItemId}`, formData)
            .then(res => {
                console.log("edited:", res.data)
            })
            .catch(err => console.log(err))
    }


    function submitEdit(e) {
        e.preventDefault()
        editItem(props.todo._id)
        props.updateStatus(false)
        props.setForceUpdate(true)
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
                <label htmlFor="category">Category:</label>
                <select onChange={editCategory} id="category" value={formData.category}>
                    <option value="Work">Work</option>
                    <option value="Personal">Home</option>
                    <option value="Shopping">School</option>
                    <option value="Others">Other</option>
                </select>
                <label htmlFor="priority">Priority:</label>
                <select onChange={editPriority} id="priority" value={formData.priority}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button type='submit'>Submit</button>
            </fieldset>
        </form>

        <button onClick={cancelEdit}>Cancel Edit</button>
    </div>)
}