import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Todo from "./Todo";
import "./TodoList.css";

export default function TodoList({ todos, setTodos }) {
  const [completed, setCompleted] = useState(
    todos.reduce((accum, todo) => (todo.isDone ? accum++ : null))
  );
  const [total, setTotal] = useState(todos.length);

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

  const editTodo = (id, editTodoText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: editTodoText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <ProgressBar completed={completed} total={total} />
      <ul className="todo-list">
        {todos?.length > 0 &&
          todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                todoDone={todoDone}
                editTodo={editTodo}
              />
            );
          })}
      </ul>
    </>
  );
}
