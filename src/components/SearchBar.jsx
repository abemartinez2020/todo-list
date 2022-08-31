import React from "react";

export default function SearchBar({ searchTodos }) {
  return (
    <>
      <input type="text" onChange={(e) => searchTodos(e)} />
    </>
  );
}
