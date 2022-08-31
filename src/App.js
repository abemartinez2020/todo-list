import "./App.css";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";

function App() {
  const storedData = JSON.parse(localStorage.getItem("todos")) ?? [];
  const [todos, setTodos] = useState(storedData);
  const [todosFiltered, setTodosFiltered] = useState(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodosFiltered(todos);
  }, [todos]);

  const searchTodos = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm) {
      const regexPattern = new RegExp(`^${searchTerm}`);
      const filteredTodos = todos.filter((todo) =>
        regexPattern.test(todo.name)
      );
      setTodosFiltered(filteredTodos);
    } else {
      setTodosFiltered(todos);
    }
  };
  return (
    <div className="main-container">
      <TodoForm setTodos={setTodos} />
      <SearchBar searchTodos={searchTodos} />
      <TodoList todos={todosFiltered} setTodos={setTodos} />
    </div>
  );
}

export default App;
