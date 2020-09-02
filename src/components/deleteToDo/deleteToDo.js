import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteList } from "../../actions/actions";
import { connect } from "react-redux";
const DeleteToDo = (props) => {
  const deleteItem = () => {
    props.deleteList(props.list.id);
  };
  return (
    <div>
      <DeleteIcon onClick={deleteItem} />
    </div>
  );
};

export default connect(null, { deleteList })(DeleteToDo);
