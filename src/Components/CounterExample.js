import React, { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  const CountPlusHandler = () => {
    setCount(count + 1);
  };

  const CountMinusHandler = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <h1 onClick={CountPlusHandler}>Plus</h1>
      <h1 onClick={CountMinusHandler}>Minus</h1>
    </div>
  );
}

export default CounterExample;
