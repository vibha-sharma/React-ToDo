import React, { useContext } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { ToDosList } from "../../store/toDosContext";
const EditTodo = (props) => {
  const [toDoslist, setToDolists] = useContext(ToDosList);
  const editTodo = (listitem) => {
    // Edit task pending
  };
  return (
    <div>
      <EditIcon onClick={() => editTodo(props.list)} />
    </div>
  );
};

export default EditTodo;
