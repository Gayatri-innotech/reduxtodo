import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoapp/actions";

export const Form = () => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Add Todo</label>
      <div className="input">
        <input
          type="text"
          className="control"
          required
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
};
