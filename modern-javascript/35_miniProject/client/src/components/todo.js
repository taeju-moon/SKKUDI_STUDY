import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { updatingTodoContext } from "../contexts/todoContext";

export default function Lecture({ content, id }) {
  const { setUsingTodo } = useContext(updatingTodoContext);
  const handleRevise = (e) => {
    e.preventDefault();
    setUsingTodo(id);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/todos/${id}`)
      .then(() => {
        alert("삭제했습니다.");
        window.location.reload();
      })
      .catch((error) => alert("삭제 실패"));
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{content}</Card.Title>
          <Button onClick={(e) => handleRevise(e)}>수정</Button>
          <Button onClick={(e) => handleDelete(e)}>삭제</Button>
        </Card.Body>
      </Card>
    </>
  );
}
