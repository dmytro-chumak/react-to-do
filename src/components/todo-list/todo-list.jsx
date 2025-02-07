"use client";

import styles from "./todo-list.module.css";

import TodoItem from "@/components/todo-item/todo-item";

import { useContext } from "react";

import { TasksContext } from "@/context/TasksContext/TasksContext";

export default function TodoList() {
  const todos = useContext(TasksContext);

  return (
    <div className={styles["list-container"]}>
      <ul className={styles.list}>
        {todos
          .filter((todo) => !todo.done)
          .map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
      </ul>
      <ul className={styles.list}>
        {todos
          .filter((todo) => todo.done)
          .map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
      </ul>
    </div>
  );
}
