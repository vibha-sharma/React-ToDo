import React, { useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { ToDosList } from "../../store/toDosContext";
const CheckToDo = (props) => {
  const [toDoslist, setToDolists] = useContext(ToDosList);
  const checkToDo = (listItem) => {
    setToDolists(
      toDoslist.filter((list) => {
        if (list.id === listItem.id) {
          list.checked = list.checked ? false : true;
        }
        return list;
      })
    );
  };
  return (
    <div>
      <Checkbox onClick={() => checkToDo(props.list)} />
    </div>
  );
};

export default CheckToDo;
