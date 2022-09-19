import { ADD_TODO, DELETE_ALL } from "../actions";

const initialState = [
  { id: 1, todo: "Geetika", completed: false },
  { id: 2, todo: "Smruti", completed: false },
  { id: 3, todo: "Priya", completed: true },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    default:
      return state;
  }
};
