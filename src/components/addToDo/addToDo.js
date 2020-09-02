import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import * as actions from "../../actions/actions";
import { randomNumber } from "../../common";
const AddToDo = (props) => {
  const addNewToDo = (e) => {
    if (e.keyCode === 13) {
      props.addList({
        val: e.target.value,
        id: randomNumber(10, 100000),
        checked: false,
      });
      e.target.value = "";
    }
  };
  return (
    <div>
      <TextField onKeyUp={addNewToDo} placeholder="Add task here" />
    </div>
  );
};
export default connect(null, {
  ...actions,
})(AddToDo);
