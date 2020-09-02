import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CHECK_TODO,
} from "../actions/actionType";

const reducers = (list = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...list, action.payload.list];
    case DELETE_TODO:
      return list.filter((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
    case CHECK_TODO:
      return list.filter((item) => {
        if (item.id === action.payload.id) {
          item.checked = item.checked ? false : true;
        }
        return list;
      });
    case EDIT_TODO:
      return list;

    default:
      return list;
  }
};

export default reducers;
