import React, { createContext, useState } from "react";

export const ToDosList = createContext(null);

export const ToDoProvider = (props) => {
  const [toDoslist, setToDolists] = useState([]);

  return (
    <ToDosList.Provider value={[toDoslist, setToDolists]}>
      {props.children}
    </ToDosList.Provider>
  );
};
