import { useState } from "react";

function AddTodo({ onAddTodo }) {
    const [text, setText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (text.trim() === "") {
            return;
        }

        onAddTodo(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Enter a todo"
            />

            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodo;