import React, { useState } from "react";
import AddToDo from "./addToDo";
import ToDoList from "./toDoList";
const LandingView = () => {
  const [toDolists, setToDolists] = useState([]);
  const [toDolistValue, setToDolistValue] = useState("");
  const [idForUpdatedToDo, setIdForUpdatedToDo] = useState(null);
  const randomNumber = (min, max, floatFlag) => {
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
  };

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
  const deleteToDo = (id) => {
    setToDolists(
      toDolists.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      })
    );
  };

  const checkToDo = (id) => {
    setToDolists(
      toDolists.filter((item) => {
        if (item.id === id) {
          item.checked = true;
        }
        return item;
      })
    );
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
