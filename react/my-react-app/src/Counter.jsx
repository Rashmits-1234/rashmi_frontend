import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+10)}>Increment by 10</button>
      <button onClick={() => setCount(count-10)}>Decrement by 10</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;