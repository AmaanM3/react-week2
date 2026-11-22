function TodoList({ todos, onRemoveTodo }) {
    return (
        <div>
            <h3>My Todo List</h3>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}

                        <button onClick={() => onRemoveTodo(todo.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;