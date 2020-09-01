import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./toDoList.css";

import EditTodo from "../editToDo/editToDo";
import DeleteToDo from "../deleteToDo/deleteToDo";
import CheckToDo from "../checkToDo/checkToDo";
const ToDoList = (props) => {
  return (
    <div>
      <List>
        {props.toDoList.map((list, index) => {
          return (
            <ListItem
              key={index}
              className={list.checked ? "list-opactity" : ""}
            >
              <CheckToDo
                checkList={() => props.checkToDoItem(list.id, "checkToDo")}
              />
              <ListItemText
                primary={list.listVal}
                className={list.checked ? " strike-through" : ""}
              />
              <EditTodo
                editList={() => {
                  if (list.checked) {
                    return false;
                  } else {
                    props.editToDoItem(list.id, list.listVal);
                  }
                }}
              />
              <DeleteToDo
                deletelist={() => props.deleteToDoItem(list.id, "deleteToDo")}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;
