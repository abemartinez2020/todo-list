import React, { useState, useEffect } from "react";
import Bar from "react-bootstrap/ProgressBar";

export default function ProgressBar({ todos }) {
  const [completed, setCompleted] = useState(null);

  const updateCompleted = (todos) => {
    const completedTask = todos.filter((todo) => todo.isDone === true);
    const percentFinishedToUnfinished =
      (completedTask.length / todos.length) * 100;

    setCompleted(Number(percentFinishedToUnfinished).toFixed(2));
  };

  useEffect(() => {
    updateCompleted(todos);
  }, [todos]);

  return (
    <>
      <Bar
        now={completed}
        label={`${completed}%`}
        style={{ backGround: "green" }}
      />
    </>
  );
}
