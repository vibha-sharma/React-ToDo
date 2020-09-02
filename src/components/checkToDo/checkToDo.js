import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { checkList } from "../../actions/actions";
import { connect } from "react-redux";
const CheckToDo = (props) => {
  const checkListToDo = () => {
    props.checkList(props.list.id);
  };
  return (
    <div>
      <Checkbox onClick={checkListToDo} />
    </div>
  );
};

export default connect(null, { checkList })(CheckToDo);
