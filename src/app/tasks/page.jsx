"use client";

import styles from "./page.module.css";

import Title from "@/components/title/title";
import CurrentDay from "@/components/current-day/current-day";
import TodoList from "@/components/todo-list/todo-list";
import AddTodo from "@/components/add-todo/add-todo";
import { useContext } from "react";
import { TasksContext } from "@/context/TasksContext/TasksContext";

export default function Tasks() {
  const todos = useContext(TasksContext);

  return (
    <>
      <div className={styles.header}>
        <Title value="Tasks" />
      </div>
      <TodoList todos={todos} />
      <AddTodo />
    </>
  );
}
