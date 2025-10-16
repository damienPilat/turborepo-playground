import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
      <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
        <button id="counter" type="button" onClick={() => setCount(count + 1)}>
          Increase Counter
        </button>
        Count: {count}
      </div>
  );
};
