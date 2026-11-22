import { useState } from "react";

import Counter from "./components/Counter";
import ListDemo from "./components/ListDemo";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoCount from "./components/TodoCount";

import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(text) {
        const newTodo = {
            id: crypto.randomUUID(),
            text: text
        };

        setTodos(prev => [...prev, newTodo]);
    }

    function removeTodo(id) {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <h1>React Week 2 Exercises</h1>

            <Counter initialValue={0} step={5} />

            <hr />

            <ListDemo />

            <hr />

            <h2>Opgave 3: TodoList</h2>

            <AddTodo onAddTodo={addTodo} />

            <TodoCount todos={todos} />

            <TodoList
                todos={todos}
                onRemoveTodo={removeTodo}
            />
        </div>
    );
}

export default App;