import React, { useState } from "react";
import ReactDOM from "react";
import Input from "./Component/input.jsx";
import ListItem from "./Component/ListItem.jsx";
import "./style.css";
const DummyData = [
  // {
  //   id: 1,
  //   Task: "clean your bedroom",
  //   completed: false,
  // },
  // {
  //   id: 2,
  //   Task: "cook dinner",
  //   completed: true,
  // },
  // {
  //   id: 3,
  //   Task: "workout",
  //   completed: false,
  // },
];

const App = () => {
  const [todos, setTodos] = useState(DummyData);
  const updateTask = (newTask) => {
    setTodos((prevData) => {
      return [newTask, ...prevData];
    });
  };
  const handleDelet = (id) => {
    const remainging = todos.filter((item) => item.id !== id);
    console.log("clicked");
    setTodos(remainging);
  };

  console.log(todos);

  return (
    <div className="container mt-5 shadow p-3 mb-5  bg-light">
      <h1 className="text-center">Todo List</h1>
      <Input newTodos={updateTask} />
      {todos.length === 0 ? (
        <p className="f2 text-light">No items found</p>
      ) : (
        ""
      )}
      {todos.map((item, i) => {
        return (
          <ListItem
            item={item.Task}
            key={item.id}
            id={item.id}
            onDelete={handleDelet}
          />
        );
      })}
    </div>
  );
};

export default App;
