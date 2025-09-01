import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");        // to store input value
  const [submittedName, setSubmittedName] = useState(""); // to store submitted name

  const handleChange = (event) => {
    setName(event.target.value); // update as user types
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh
    setSubmittedName(name); // store submitted name
    setName("");            // optional: clear input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <h2>Your name is: {submittedName}</h2>}
    </div>
  );
}

export default NameForm;
