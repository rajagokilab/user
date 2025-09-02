import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]); // Step 1.1: store users
  const [loading, setLoading] = useState(true); // Step 1.2: loading state
  const [error, setError] = useState(null); // Step 1.3: error handling

  // Step 1.4: fetch users when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Step 1.5: render
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>User List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
