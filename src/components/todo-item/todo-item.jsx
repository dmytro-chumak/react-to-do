"use client";

import styles from "./todo-item.module.css";

import { useContext } from "react";

import { TasksDispatchContext } from "@/context/TasksContext/TasksContext";

export default function TodoItem({ id, text, done }) {
  const dispatch = useContext(TasksDispatchContext);

  function handleDone() {
    dispatch({ type: "done", id: id });
  }

  return (
    <li className={styles.item + " " + (done ? styles.done : "")}>
      <button onClick={handleDone} className={styles["button-done"]}></button>
      <span>{text}</span>
    </li>
  );
}
