import React from "react";
import { useSelector } from "react-redux";

export const Todos = ({ handleEditClick, editFormVisibility }) => {
  const todos = useSelector((state) => state.operationsReducer);
  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        <input type="checkbox" checked={todo.completed}></input>
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
    </div>
  ));
};
