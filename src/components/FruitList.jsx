import React from "react";

function FruitList() {
  // Array of fruits
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

  return (
    <div>
      <h2>Fruit List</h2>
      {fruits.map((fruit, index) => (
        <React.Fragment key={index}>
          <p>{fruit}</p>
        </React.Fragment>
      ))}
    </div>
  );
}

export default FruitList;
