import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  inputText: "",
  todos: [],
  status: "all",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputText, todos, status } = state;

  const setTodos = (data) => {
    dispatch({ type: "SET_TODO", payload: data });
  };
  const setInputText = (input) => {
    dispatch({ type: "SET_INPUT_TEXT", payload: input });
  };
  const setStatus = (option) => {
    dispatch({ type: "SELECT", payload: option });
  };

  let filteredTodos = todos.filter((todo) => {
    if (status === "completed") return !!todo.completed;
    if (status === "uncompleted") return !todo.completed;
    return todo;
  });

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const contextValue = {
    inputText,
    setInputText,
    todos,
    setTodos,
    status,
    setStatus,
    filteredTodos,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
