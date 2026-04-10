import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="container">
      <h2>Interactive Counter</h2>
      <p className="count">{count}</p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${Math.min(count, 100)}%` }}
        ></div>
      </div>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;