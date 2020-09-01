import React, { useState } from "react";
import AddToDo from "../addToDo/addToDo";
import ToDoList from "../toDoList/toDoList";
import { randomNumber } from "../../common";
const LandingView = () => {
  const [toDolists, setToDolists] = useState([]);
  const [toDolistValue, setToDolistValue] = useState("");
  const [idForUpdatedToDo, setIdForUpdatedToDo] = useState(null);

  const addNewToDo = (e) => {
    setToDolistValue(e.target.value);
    if (e.keyCode === 13) {
      if (idForUpdatedToDo) {
        setToDolists(
          toDolists.map((list) => {
            if (list.id === idForUpdatedToDo) {
              list.listVal = e.target.value;
            }
            return list;
          })
        );
      } else {
        setToDolists([
          ...toDolists,
          {
            listVal: e.target.value,
            checked: false,
            id: randomNumber(10, 100000000),
          },
        ]);
      }
      setIdForUpdatedToDo(null);
      setToDolistValue("");
    }
  };

  const listFilter = (filterItem, toDoAction) => {
    setToDolists(
      toDolists.filter((item) => {
        if (toDoAction === "deleteToDo" && item.id !== filterItem) {
          return item;
        }
        if (toDoAction === "checkToDo") {
          if (item.id === filterItem) {
            item.checked = item.checked ? false : true;
          }
          return item;
        }
      })
    );
  };
  const deleteToDo = (id, deleteToDo) => {
    listFilter(id, deleteToDo);
  };

  const checkToDo = (id, checkToDo) => {
    listFilter(id, checkToDo);
  };

  const editToDo = (id, toDoVal) => {
    setToDolistValue(toDoVal);
    setIdForUpdatedToDo(id);
  };
  return (
    <div>
      <AddToDo onAddNew={addNewToDo} listValue={toDolistValue} />
      <ToDoList
        toDoList={toDolists}
        deleteToDoItem={deleteToDo}
        checkToDoItem={checkToDo}
        editToDoItem={editToDo}
      />
    </div>
  );
};

export default LandingView;
