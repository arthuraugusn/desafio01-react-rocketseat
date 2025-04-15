import React, { useState } from "react";
import { Input } from "./Input";
import styles from "./Main.module.css";
import { TodoList } from "./TodoList";
import { TodoInterface } from "../types/Todo.interface";
import { v4 as uuidv4 } from 'uuid';

export function Main() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const onCreateTodo = () => {
    setTodos([
      ...todos,
      {
        isCompleted: false,
        todo: todo.trim(),
        id: uuidv4()
      },
    ]);
    setTodo("");
  };
  function toggleComplete(id: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  }
  function deleteTodo(id:string){
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  return (
    <main className={styles.main}>
      <div>
        <Input
          onClick={onCreateTodo}
          value={todo}
          onChangeValue={handleChange}
        />
        <TodoList todoList={todos} onCompleteTodo={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
}
