import React from "react";
import "./SearchBar.css";

export default function SearchBar({ searchTodos }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => searchTodos(e)}
        placeholder="search todos"
      />
    </div>
  );
}
