import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TodoForm from "../components/TodoForm";
import SearchBar from "../components/SearchBar";
import TodoList from "../components/TodoList";

export default function Home({ todos, setTodos, searchTodos }) {
  return (
    <div>
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col md={8}>
            <TodoForm setTodos={setTodos} />
          </Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col md={8}>
            <SearchBar searchTodos={searchTodos} />
          </Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col md={8}>
            <TodoList todos={todos} setTodos={setTodos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
