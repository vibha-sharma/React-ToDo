import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import "./toDoList.css";

import EditTodo from "../editToDo/editToDo";
import DeleteToDo from "../deleteToDo/deleteToDo";
import CheckToDo from "../checkToDo/checkToDo";
const ToDoList = ({ listToDo }) => {
  if (!listToDo) {
    return <h3>Add any task</h3>;
  } else {
    return (
      <div>
        <List>
          {listToDo.map((list, index) => {
            return (
              <ListItem
                key={index}
                className={list.checked ? "list-opactity" : ""}
              >
                <CheckToDo list={list} />
                <ListItemText
                  primary={list.val}
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
  }
};
const mapStateToProps = (state) => {
  return { listToDo: state };
};

export default connect(mapStateToProps)(ToDoList);
