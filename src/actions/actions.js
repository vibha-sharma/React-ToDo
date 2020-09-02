import { ADD_TODO, DELETE_TODO, EDIT_TODO, CHECK_TODO } from "./actionType";

export const addList = (list = []) => {
  return {
    type: ADD_TODO,
    payload: {
      list,
    },
  };
};

export const checkList = (id) => {
  return {
    type: CHECK_TODO,
    payload: {
      id,
    },
  };
};

export const deleteList = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const editList = (list) => {
  return {
    type: EDIT_TODO,
    payload: {
      list,
    },
  };
};
