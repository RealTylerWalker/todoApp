import { TodoContext } from '../context/TodoContext'
import { useContext, useState, useEffect } from "react";
import axios from "axios"
import CompletedList from './CompletedList';

function Completed() {

    const { todos, getTodos } = useContext(TodoContext)

    return (
        <div>
            <h1>Completed</h1>
            <CompletedList todos={todos} />
        </div>
    )
}

export default Completed;