import React, { useState, useEffect, useContext } from "react";
import { updatingTodoContext } from "../contexts/todoContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { usingTodo, setUsingTodo } = useContext(updatingTodoContext);
  useEffect(() => {
    if (usingTodo?.length > 0) {
      axios
        .get(`http://localhost:8000/todos/${usingTodo}`)
        .then((result) => setTodo(result.data.data.todo.content))
        .catch((error) => console.log(error));
    }
  }, [usingTodo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (usingTodo?.length > 0) {
      axios
        .put(`http://localhost:8000/todos/${usingTodo}`, { content: todo })
        .then(() => {
          alert("할일 수정됨");
          setTodo("");
          setUsingTodo(null);
          window.location.reload();
        });
    } else {
      axios.post(`http://localhost:8000/todos`, { content: todo }).then(() => {
        alert("할일 추가됨");
        setTodo("");
        window.location.reload();
      });
    }
  };
  return (
    <Form className="mb-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{usingTodo ? "todo 수정" : "todo 작성"}</Form.Label>
        <Form.Control
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write Here"
        />
      </Form.Group>
      <Button variant="primary" onClick={(e) => handleSubmit(e)} type="submit">
        Submit
      </Button>
    </Form>
  );
}
