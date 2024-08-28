import TodoItem from "./TodoItem"
export default function TodoList({ todoList }) {

    return (
        <div className="todo-list">
            {todoList.map(todo => {
                if (!todo.status) {
                    return <TodoItem key={todo._id} todo={todo} />
                }
            })
            }
        </div>
    )
}