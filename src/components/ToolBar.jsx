import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import ThemeSelector from "./ThemeSelector";

export default function ToolBar() {
  return (
    <div className="mb-4  position-relative">
      <h2 className="text-center">
        <BsCheck2Circle className="me-2" />
        U-Do
      </h2>
      <ThemeSelector />
    </div>
  );
}
