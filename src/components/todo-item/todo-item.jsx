"use client";

import styles from "./todo-item.module.css";

import { useContext } from "react";

import { TasksDispatchContext } from "@/context/TasksContext/TasksContext";

export default function TodoItem({ id, text, done, date }) {
  const dispatch = useContext(TasksDispatchContext);

  function handleDone() {
    dispatch({ type: "done", id: id });
  }

  return (
    <li className={styles.item + " " + (done ? styles.done : "")}>
      <button onClick={handleDone} className={styles["button-done"]}></button>
      <div className={styles["text-container"]}>
        <span>{text}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </li>
  );
}
