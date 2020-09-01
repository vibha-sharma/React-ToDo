import React, { useState } from "react";
import AddToDo from "./addToDo";
import ToDoList from "./toDoList";
const LandingView = () => {
  const [toDolists, setToDolists] = useState([]);

  const addNewToDo = (e) => {
    if (e.keyCode === 13) {
      setToDolists([...toDolists, e.target.value]);
      e.target.value = "";
    }
  };
  const deleteToDo = (list, index) => {
    setToDolists(
      toDolists.filter((item) => {
        if (item != list) {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <AddToDo onAddNew={addNewToDo} />
      <ToDoList toDoList={toDolists} deleteToDoItem={deleteToDo} />
    </div>
  );
};

export default LandingView;
