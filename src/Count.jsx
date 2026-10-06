import { useState } from "react";

const Count = ()=> {

    const [counter, setCounter] = useState(0);
    const handleDecrement = ()=> {
        setCounter(counter - 1)
    }
    const handleIncrement = ()=> {
        setCounter(counter + 1)
    }

    return (
        <>
            <h2>Count: {counter}</h2>
            <button disabled = {counter === 0} onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default Count;