import React from "react";
import trashCan from "../assets/trashcan.svg";
import done from "../assets/done.svg";
import edit from "../assets/edit.svg";
import "./Todo.css";

export default function Todo({ todo, deleteTodo, todoDone }) {
  return (
    <li className={todo.isDone ? "todo done" : "todo"}>
      <span>{todo.name}</span>
      <div className="todo_actions">
        <img src={edit} alt="edit icon" />
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
