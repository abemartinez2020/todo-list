import React from "react";
import Todo from "./Todo";
export default function TodoList({ todos, setTodos }) {
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  return (
    <>
      <ul>
        {todos?.length > 0 &&
          todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
          })}
      </ul>
    </>
  );
}
