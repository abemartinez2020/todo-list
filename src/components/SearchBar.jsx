import React from "react";
import Form from "react-bootstrap/Form";
export default function SearchBar({ searchTodos }) {
  return (
    <Form className="mt-5 ">
      <Form.Group>
        <Form.Control
          type="text"
          onChange={(e) => searchTodos(e)}
          placeholder="search todos"
        />
      </Form.Group>
    </Form>
  );
}
