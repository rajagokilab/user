import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0); // initial counter value

  const handleClick = () => {
    setCount(count + 1); // increment count on each click
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <h2>Button clicked: {count} times</h2>
    </div>
  );
}

export default ClickCounter;
