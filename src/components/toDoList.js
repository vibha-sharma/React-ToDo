import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import EditTodo from "./editToDo";
import DeleteToDo from "./deleteToDo";
import CheckToDo from "./checkToDo";
const ToDoList = (props) => {
  return (
    <div>
      <List>
        {props.toDoList.map((list, index) => {
          return (
            <ListItem key={index}>
              <CheckToDo checkList={() => props.checkToDoItem(list.id)} />
              <ListItemText
                primary={list.listVal}
                className={list.checked ? " strike-through" : ""}
              />
              <EditTodo
                editList={() => props.editToDoItem(list.id, list.listVal)}
              />
              <DeleteToDo deletelist={() => props.deleteToDoItem(list.id)} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;
