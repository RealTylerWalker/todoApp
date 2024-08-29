import { TodoContext } from '../context/TodoContext'
import { useContext, useState } from "react";
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




            <form onSubmit={submitTask} className='todoFormContainer'>
                <div className='todoForm'>
                    <input type='text' onChange={updateTitle} id="title" placeholder='Task Name' value={formData.title}></input>
                    <input type='text' onChange={updateDescription} id="description" placeholder='Add some deets...' value={formData.description}></input>
                    <div className='catPriorityDue'>
                        <div className='dueDate'>
                            <input type='date' placeholder="Choose Date:" onChange={updateDueDate} id="dueDate" value={formData.dueDate}></input>
                        </div>
                        <div className='category'>
                            <select onChange={editCategory} id="category" value={formData.category} placeholder="select category">

                                <option value="" disabled selected>Choose Category</option>
                                <option value="Work">Work</option>
                                <option value="Personal">Personal</option>
                                <option value="School">School</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Others">Other</option>
                            </select>
                        </div>
                        <div className='priority'>
                            <select onChange={editPriority} id="priority" value={formData.priority}>
                                <option value="" disabled selected>Choose Priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className='submitTask'>Add task</button>
                </div>
            </form>

            <div className='todoListContainer'>
                <TodoList todoList={todos} />

            </div>
        </div>
    )
}

export default Home