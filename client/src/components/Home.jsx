import { TodoContext } from '../context/TodoContext'
import { useContext, useState, useEffect } from "react";
import axios from "axios"
import TodoList from './TodoList';

function Home() {

    const { todos, getTodos } = useContext(TodoContext)

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        category: "",
        priority: ""
    })

    const updateTitle = (e) => {
        setFormData({ ...formData, title: e.target.value })
    }

    const updateDescription = (e) => {
        setFormData({ ...formData, description: e.target.value })
    }

    const updateDueDate = (e) => {
        setFormData({ ...formData, dueDate: e.target.value })
    }

    const editCategory = (e) => {
        setFormData({ ...formData, category: e.target.value })
    }

    const editPriority = (e) => {
        setFormData({ ...formData, priority: e.target.value })
    }

    function submitTask(e) {
        e.preventDefault()
        console.log(formData)

        axios.post(`/api/todo`, formData)

            .then(() => {
                getTodos()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Home</h1>

            <form onSubmit={submitTask}>
                <fieldset>
                    <input type='text' onChange={updateTitle} id="title" placeholder='Task Name' value={formData.title}></input>
                    <textarea type='text' onChange={updateDescription} id="description" placeholder='Add some deets...' value={formData.description}></textarea>
                    <label htmlFor="dueDate">Due date:</label>
                    <input type='date' onChange={updateDueDate} id="dueDate" placeholder='Due date:' value={formData.dueDate}></input>
                    <label htmlFor="category">Category:</label>
                    <select onChange={editCategory} id="category" value={formData.category}>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="School">School</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Others">Other</option>
                    </select>
                    <label htmlFor="priority">Priority:</label>
                    <select onChange={editPriority} id="priority" value={formData.priority}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <button type='submit'>Add task</button>
                </fieldset>
            </form>

            <div>
                <TodoList todoList={todos} />
            </div>

        </div>
    )
}

export default Home