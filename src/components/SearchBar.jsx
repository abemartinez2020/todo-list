import React from "react";
import Form from "react-bootstrap/Form";
import { useTheme } from "../hooks/useTheme";

export default function SearchBar({ searchTodos }) {
  const { darkMode } = useTheme();

  return (
    <Form className="mt-5 ">
      <Form.Group>
        <Form.Control
          type="text"
          onChange={(e) => searchTodos(e)}
          placeholder="search todos"
          style={{
            backgroundColor: `${darkMode ? "#0000005b" : ""}`,
            color: `${darkMode ? "white" : ""}`,
            border: `${darkMode ? "none" : ""}`,
          }}
        />
      </Form.Group>
    </Form>
  );
}
