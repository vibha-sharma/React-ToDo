import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
const CheckToDo = (props) => {
  return (
    <div>
      <Checkbox onClick={props.checkList} />
    </div>
  );
};

export default CheckToDo;
