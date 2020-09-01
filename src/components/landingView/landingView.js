import React from "react";
import AddToDo from "../addToDo/addToDo";
import ToDoList from "../toDoList/toDoList";
const LandingView = () => {
  return (
    <div>
      <AddToDo />
      <ToDoList />
    </div>
  );
};

export default LandingView;
