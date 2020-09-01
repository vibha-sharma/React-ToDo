import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { ToDosList } from "../../store/toDosContext";

const DeleteToDo = (props) => {
  const [toDoslist, setToDolists] = useContext(ToDosList);
  const deleteItem = (listItem) => {
    console.log("listItem", listItem.id);
    setToDolists(
      toDoslist.filter((list) => {
        if (list.id !== listItem.id) {
          return list;
        }
      })
    );
  };
  return (
    <div>
      <DeleteIcon onClick={() => deleteItem(props.list)} />
    </div>
  );
};

export default DeleteToDo;
