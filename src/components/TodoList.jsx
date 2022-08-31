import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

export default function TodoList({ todos, setTodos }) {
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const todoDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <>
      <ul className="todo-list">
        {todos?.length > 0 &&
          todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                todoDone={todoDone}
              />
            );
          })}
      </ul>
    </>
  );
}
