import React, { useState, useRef, useEffect } from "react";
import trashCan from "../assets/trashcan.svg";
import done from "../assets/done.svg";
import edit from "../assets/edit.svg";
import "./Todo.css";

export default function Todo({ todo, deleteTodo, todoDone, editTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.name);
  const editRef = useRef(null);

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

  useEffect(() => {
    editRef.current?.focus();
  }, [editMode]);

  return (
    <li className={todo.isDone ? "todo done" : "todo"}>
      <form onSubmit={(e) => handleEdit(e, todo.id)}>
        {editMode ? (
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => handleChange(e)}
            className="edit-field"
            ref={editRef}
          />
        ) : (
          <span>{todo.name}</span>
        )}
      </form>
      <div className="todo_actions">
        <img
          src={edit}
          alt="edit icon"
          onClick={() => (!editMode & !todo.isDone ? handleEditMode() : null)}
        />
        <img
          src={done}
          alt="done checkmark icon"
          onClick={() => todoDone(todo.id)}
        />
        <img
          className="todo_trashcan icon"
          src={trashCan}
          alt="trashcan"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </li>
  );
}
