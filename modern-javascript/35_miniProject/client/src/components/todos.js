import React, { useState, useEffect } from "react";
import Todo from "./todo";
import axios from "axios";

export default function Todos() {
  const [Todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then((result) => setTodos(result.data.data.todos))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div>
        {Todos?.map((todo) => (
          <Todo key={todo._id} content={todo.content} id={todo._id} />
        ))}
      </div>
    </>
  );
}
