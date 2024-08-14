import React, { useState } from "react";
import MainButton from "./UI/Button/MainButton";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <p>count is {count}</p>
            <MainButton onClick={() => setCount(count => count + 1)}>отдать</MainButton>
            <MainButton onClick={() => setCount(0)}>аннулировать</MainButton>
            <MainButton onClick={() => setCount(count => count - 1)}>спиздить</MainButton>
        </div>
    );
};

export default Counter;