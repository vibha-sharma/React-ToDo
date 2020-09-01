import React from "react";
import EditIcon from "@material-ui/icons/Edit";

const EditTodo = (props) => {
  return (
    <div>
      <EditIcon onClick={props.editList} />
    </div>
  );
};

export default EditTodo;
