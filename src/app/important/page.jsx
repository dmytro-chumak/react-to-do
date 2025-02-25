"use client";

import styles from "./page.module.css";

import Title from "@/components/title/title";
import CurrentDay from "@/components/current-day/current-day";
import TodoList from "@/components/todo-list/todo-list";
import AddTodo from "@/components/add-todo/add-todo";
import { useContext } from "react";
import { TasksContext } from "@/context/TasksContext/TasksContext";

export default function Important() {
  const todos = useContext(TasksContext).filter(
    (todo) => todo.important !== undefined && todo.important
  );

  return (
    <>
      <div className={styles.header}>
        <Title value="Important" />
        <CurrentDay />
      </div>
      <TodoList todos={todos} />
      <AddTodo />
    </>
  );
}
