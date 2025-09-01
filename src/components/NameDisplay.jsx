import { useState } from "react";

function NameDisplay() {
  const [name, setName] = useState(""); // state to store input

  const handleChange = (event) => {
    setName(event.target.value); // update state as user types
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={handleChange}
      />
      <h2>Your name is: {name}</h2>
    </div>
  );
}

export default NameDisplay;
