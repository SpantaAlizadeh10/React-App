import React from "react";
import { useQuery } from "@tanstack/react-query";

async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

function TodoList() {
  const { data, isLoading, error } = useQuery(["todos"], fetchTodos);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.slice(0, 10).map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
