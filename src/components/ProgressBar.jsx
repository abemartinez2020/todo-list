import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

export default function ProgressBar({ todos }) {
  const [completed, setCompleted] = useState(null);

  const updateCompleted = (todos) => {
    const completed = todos.filter((todo) => todo.isDone === true);
    console.log(completed);
    setCompleted(completed.length);
  };

  useEffect(() => {
    updateCompleted(todos);
  }, [todos]);

  return (
    <div className="total-bar">
      <div
        className="completed-bar"
        style={{ width: `${(completed / todos.length) * 100}%` }}
      >
        <p>{(completed / todos.length) * 100}%</p>
      </div>
    </div>
  );
}
