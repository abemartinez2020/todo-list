import React from "react";
import trashCan from "../assets/trashcan.svg";

export default function Todo({ todo, deleteTodo }) {
  return (
    <li>
      <span>{todo.name}</span>
      <img src={trashCan} alt="trashcan" onClick={() => deleteTodo(todo.id)} />
    </li>
  );
}
