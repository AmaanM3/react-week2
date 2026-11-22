import { useState, useEffect } from "react";

function Counter({ initialValue, step }) {

    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem("count");
        return savedCount !== null ? Number(savedCount) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return (
        <div>
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(prev => prev + step)}>
                Increase
            </button>

            <button onClick={() => setCount(prev => prev - step)}>
                Decrease
            </button>

            <button onClick={() => setCount(initialValue)}>
                Reset
            </button>
        </div>
    );
}

export default Counter;