import React from "react";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
export default function SearchBar({ searchTodos }) {
  return (
    <Form className="mt-5 ">
      <Form.Group>
        <i style={{ position: "absolute", right: 530 }}>
          <BsSearch />
        </i>
        <Form.Control
          type="text"
          onChange={(e) => searchTodos(e)}
          placeholder="search todos"
        />
      </Form.Group>
    </Form>
  );
}
