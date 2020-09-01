import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteToDo = (props) => {
  return (
    <div>
      <DeleteIcon onClick={props.deletelist} />
    </div>
  );
};

export default DeleteToDo;
