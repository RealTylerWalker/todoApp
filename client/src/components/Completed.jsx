import { TodoContext } from '../context/TodoContext'
import { useContext, useState, useEffect } from "react";
import axios from "axios"
import CompletedList from './CompletedList';

function Completed() {

    const { todos, getTodos } = useContext(TodoContext)

    return (
        <div className="todoListContainer">
            <CompletedList todos={todos} />
        </div>
    )
}

export default Completed;