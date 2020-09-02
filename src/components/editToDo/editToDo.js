import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { editList, addList } from "../../actions/actions";
import { connect } from "react-redux";
const EditTodo = (props) => {
  const editTodoList = () => {
    //props.addList(props.list.val);
    props.editList(props.list);
  };
  return (
    <div>
      <EditIcon onClick={editTodoList} />
    </div>
  );
};

export default connect(null, { editList, addList })(EditTodo);
