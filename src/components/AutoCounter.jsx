import React, { useState, useEffect } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);

  // Step 1.1: useEffect for auto-increment every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Step 1.2: cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // empty dependency = run once on mount

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Auto Counter: {count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default AutoCounter;
