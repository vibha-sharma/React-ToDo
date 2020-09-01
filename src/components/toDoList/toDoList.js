import React, { useContext } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./toDoList.css";

import { ToDosList } from "../../store/toDosContext";

import EditTodo from "../editToDo/editToDo";
import DeleteToDo from "../deleteToDo/deleteToDo";
import CheckToDo from "../checkToDo/checkToDo";
const ToDoList = () => {
  const [toDoslist, setToDolists] = useContext(ToDosList);
  return (
    <div>
      <List>
        {toDoslist.map((list, index) => {
          return (
            <ListItem
              key={index}
              className={list.checked ? "list-opactity" : ""}
            >
              <CheckToDo list={list} />
              <ListItemText
                primary={list.listVal}
                className={list.checked ? " strike-through" : ""}
              />
              <EditTodo list={list} />
              <DeleteToDo list={list} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ToDoList;
