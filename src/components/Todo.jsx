import React, { useState, useRef, useEffect } from "react";
import { BsCircle, BsCheckCircle, BsPen, BsTrash2 } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import { useTheme } from "../hooks/useTheme";

export default function Todo({ todo, index, deleteTodo, todoDone, editTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.name);
  const editRef = useRef(null);
  const { darkMode } = useTheme();

  const handleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

  const handleChange = (e) => {
    setEditedTodo(e.target.value);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    editTodo(id, editedTodo);
    setEditMode(false);
  };

  const strikthrough = (todo) => {
    if (todo.isDone) return <del style={{ color: "#0DCAF0" }}>{todo.name}</del>;
    return <span>{todo.name}</span>;
  };

  useEffect(() => {
    editRef.current?.focus();
  }, [editMode]);

  return (
    <li
      className="d-flex justify-content-between align-items-center mb-5 shadow py-3 px-1"
      style={{
        backgroundColor: `${
          index % 2 !== 0 ? "" : darkMode ? "#0000001b" : "#f0f8ff"
        }`,
      }}
    >
      <Container className="w-50 d-block">
        {editMode ? (
          <form onSubmit={(e) => handleEdit(e, todo.id)}>
            <input
              className="w-100"
              type="text"
              value={editedTodo}
              onChange={(e) => handleChange(e)}
              ref={editRef}
            />
          </form>
        ) : (
          strikthrough(todo)
        )}
      </Container>
      <Container className="d-flex w-25 justify-content-between">
        <BsPen
          onClick={() => (!editMode & !todo.isDone ? handleEditMode() : null)}
        />
        {todo.isDone ? (
          <BsCheckCircle onClick={() => todoDone(todo.id)} />
        ) : (
          <BsCircle onClick={() => todoDone(todo.id)} />
        )}

        <BsTrash2 onClick={() => deleteTodo(todo.id)} />
      </Container>
    </li>
  );
}
