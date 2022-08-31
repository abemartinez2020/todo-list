import React, { useState } from "react";
import trashCan from "../assets/trashcan.svg";
import done from "../assets/done.svg";
import edit from "../assets/edit.svg";
import "./Todo.css";

export default function Todo({ todo, deleteTodo, todoDone, editTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.name);

  const handleChange = (e) => {
    setEditedTodo(e.target.value);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    editTodo(id, editedTodo);
    setEditMode(false);
  };

  return (
    <li className={todo.isDone ? "todo done" : "todo"}>
      <form onSubmit={(e) => handleEdit(e, todo.id)}>
        {editMode && !todo.isDone ? (
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => handleChange(e)}
          />
        ) : (
          <span>{todo.name}</span>
        )}
      </form>
      <div className="todo_actions">
        <img
          src={edit}
          alt="edit icon"
          onClick={() =>
            !editMode & !todo.isDone
              ? setEditMode((prevState) => !prevState)
              : null
          }
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
