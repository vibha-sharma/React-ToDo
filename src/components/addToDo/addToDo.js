import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { ToDosList } from "../../store/toDosContext";
import { randomNumber } from "../../common";
const AddToDo = (props) => {
  const [toDoslist, setToDolists] = useContext(ToDosList);
  const addNewToDo = (e) => {
    if (e.keyCode === 13) {
      setToDolists([
        ...toDoslist,
        {
          listVal: e.target.value,
          checked: false,
          id: randomNumber(10, 100000000),
        },
      ]);
      e.target.value = "";
    }
  };
  return (
    <div>
      <TextField onKeyUp={addNewToDo} placeholder="Add task here" />
    </div>
  );
};
export default AddToDo;
