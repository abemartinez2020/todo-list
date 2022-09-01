import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { BsCheck2Circle } from "react-icons/bs";

export default function TodoForm({ setTodos }) {
  const [todo, setTodo] = useState({ name: "" });
  const [error, setError] = useState(false);
  const inputTodo = useRef();

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
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col md={8}>
            <Card className="shadow-lg">
              <Card.Header
                className="p-3 text-center"
                style={{ backgroundColor: "AliceBlue" }}
              >
                <h4 className="d-sm-flex justify-content-center align-items-center">
                  <BsCheck2Circle className="me-2" />
                  U-Do
                </h4>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#f1f5f8" }}>
                <Form
                  className="d-md-flex flex-sm-column flex-md-row align-items-start justify-content-between mb-3"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <Form.Group className="w-75">
                    <Form.Control
                      type="text"
                      onChange={(e) => handleChange(e)}
                      value={todo.name}
                      ref={inputTodo}
                      placeholder="add todo"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group style={{ width: "20%" }}>
                    <Button
                      type="submit"
                      variant="outline-secondary"
                      className="w-100"
                      onClick={handleSubmit}
                    >
                      Sumbit
                    </Button>
                  </Form.Group>
                </Form>

                {error && (
                  <Alert variant="warning">must submit valid text</Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
