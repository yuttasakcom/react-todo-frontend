import { TODO } from "../constants/actionTypes";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO.REDUCER_SET_TODOS:
      return action.payload;
    case TODO.SET_TODO:
      return action.payload;
    default:
      return state;
  }
};
