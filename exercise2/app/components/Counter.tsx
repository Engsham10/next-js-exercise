
"use client";

import { useState } from "react";

export default function Counter() {
  // Initialize count to zero
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Application</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
