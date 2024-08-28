import TodoItem from "./TodoItem"
export default function CompletedList({ todos }) {

    return (
        <div className="todo-list">
            {todos.map(todo => {
                if (todo.status) {
                    return <TodoItem key={todo._id} todo={todo} />
                }
            })
            }
        </div>
    )
}