import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useTheme } from "../hooks/useTheme";

export default function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState({ name: "" });
  const [error, setError] = useState(false);
  const inputTodo = useRef();
  const { darkMode } = useTheme();

  const handleChange = (e) => {
    const value = e.target.value;

    setTodo({
      id: Math.floor(Math.random() * 100),
      name: value,
      isDone: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name) return setError(true);

    setTodos((prevState) => [...prevState, todo]);
    setTodo({ name: "" });
    setError(false);
    inputTodo.current.focus();
  };

  return (
    <>
      <Card
        className="shadow-lg"
        style={{ border: `${darkMode ? "none" : ""}` }}
      >
        <Card.Body
          style={{ backgroundColor: `${darkMode ? "#000000c1" : "#f1f5f8"}` }}
        >
          <Form
            className="d-md-flex align-items-center justify-content-between mb-3"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Form.Group className=" mx-auto">
              <Form.Control
                style={{
                  backgroundColor: `${darkMode ? "#0000005b" : ""}`,
                  color: `${darkMode ? "white" : ""}`,
                  border: `${darkMode ? "none" : ""}`,
                }}
                type="text"
                onChange={(e) => handleChange(e)}
                value={todo.name}
                ref={inputTodo}
                placeholder="add todo"
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mx-auto">
              <Button
                type="submit"
                variant={darkMode ? "outline-info" : "outline-secondary"}
                className="w-100"
                onClick={handleSubmit}
              >
                Sumbit
              </Button>
            </Form.Group>
          </Form>

          {error && <Alert variant="warning">must submit valid text</Alert>}
        </Card.Body>
      </Card>
    </>
  );
}
