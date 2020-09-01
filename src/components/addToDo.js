import React from "react";
import TextField from "@material-ui/core/TextField";

const AddToDo = (props) => {
  return (
    <div>
      <TextField
        value={props.listValue}
        onChange={props.onAddNew}
        onKeyUp={props.onAddNew}
        placeholder="Add task here"
      />
    </div>
  );
};
export default AddToDo;
