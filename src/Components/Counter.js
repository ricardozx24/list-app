import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
            <h1>Counter</h1>
            <button className="counter--minus" onClick={subtract}> - </button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}> + </button>
        </div>
    )
}