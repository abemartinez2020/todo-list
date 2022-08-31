import React, { useState, useRef } from "react";

export default function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState({ name: "" });
  const [error, setError] = useState(false);
  const inputTodo = useRef();

  const handleChange = (e) => {
    const value = e.target.value;

    setTodo({
      id: Math.floor(Math.random() * 100),
      name: value,
      isDone: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name) return setError(true);

    setTodos((prevState) => [...prevState, todo]);
    setTodo({ name: "" });
    setError(false);
    inputTodo.current.focus();
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={todo.name}
          ref={inputTodo}
        />
        <button>Submit</button>
        {error && <p>must submit valid text</p>}
      </form>
    </>
  );
}
