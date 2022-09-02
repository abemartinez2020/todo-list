import React from "react";
import ProgressBar from "./ProgressBar";
import Todo from "./Todo";

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

  const editTodo = (id, editTodoText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: editTodoText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <ProgressBar todos={todos} />
      <ul className="p-0 mt-3  d-lg-flex flex-wrap justify-content-between">
        {todos?.length > 0 &&
          todos.map((todo, i) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                index={i}
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
