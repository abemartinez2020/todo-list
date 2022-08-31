import { buildQueries } from "@testing-library/react";
import React from "react";

export default function ProgressBar({ completed, total }) {
  const totalBar = {
    height: 20,
    width: "1000",
    backgrounColor: "orange",
  };
  const completedBar = {
    height: "100%",
    width: `${(completed / total) * 100}%`,
    color: "blue",
  };
  return (
    <div className={totalBar}>
      <div style={completedBar}></div>
    </div>
  );
}
