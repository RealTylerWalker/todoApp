import { TodoContext } from '../context/TodoContext'
import { useContext, useState, useEffect } from "react";
import axios from "axios"
import TodoList from './TodoList';

function Home() {

    const { todos } = useContext(TodoContext)

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: ""
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

    function submitTask(e) {
        e.preventDefault()
        axios.post(`/api/todo`, formData)
            .then(res => {
                console.log(res.data)
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