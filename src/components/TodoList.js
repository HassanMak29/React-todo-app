import React from "react";
import { useGlobalContext } from "../context";
// import components
import Todo from "./Todo";

const TodoList = () => {
  const { todos, setTodos, filteredTodos } = useGlobalContext();

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
