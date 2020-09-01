import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";

import DeleteToDo from "./deleteToDo";
const ToDoList = (props) => {
  return (
    <div>
      <List>
        {props.toDoList.map((list, index) => {
          return (
            <ListItem key={index}>
              <Checkbox />
              <ListItemText primary={list} />
              <DeleteToDo
                deletelist={() => props.deleteToDoItem(list, index)}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;
