import React from "react";
import { useGlobalContext } from "../context";

function Todo({ todo }) {
  const { todos, setTodos } = useGlobalContext();

  const completeHandler = () => {
    const newItems = todos.map((item) => {
      if (item.id === todo.id) {
        todo.completed = !todo.completed;
      }
      return item;
    });
    setTodos(newItems);
  };

  const deleteHandler = (e) => {
    const newTodosList = todos.filter((el) => el.id !== todo.id);
    setTodos(newTodosList);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
