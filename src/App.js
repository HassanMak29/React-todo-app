import "./App.css";

// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useGlobalContext } from "./context";

function App() {
  const { inputText, setInputText, todos, setTodos, setStatus, filteredTodos } =
    useGlobalContext();

  return (
    <div className="App">
      <header>
        <h1>Hassan's To-Do App</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
