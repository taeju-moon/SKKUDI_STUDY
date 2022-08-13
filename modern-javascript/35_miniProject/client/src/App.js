import React, { useState } from "react";
import Todos from "./components/todos";
import TodoForm from "./components/todoForm";
import { updatingTodoContext } from "./contexts/todoContext";

export default function App() {
  const [usingTodo, setUsingTodo] = useState();
  return (
    <>
      <updatingTodoContext.Provider value={{ usingTodo, setUsingTodo }}>
        <TodoForm />
        <Todos />
      </updatingTodoContext.Provider>
    </>
  );
}
