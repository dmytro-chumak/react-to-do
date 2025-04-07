"use client";

import styles from "./todo-item.module.css";

import { memo, useContext } from "react";

import { TasksDispatchContext } from "@/context/TasksContext/TasksContext";

function TodoItem({ id, text, done, date, important }) {
  const dispatch = useContext(TasksDispatchContext);

  function handleDone() {
    dispatch({ type: "done", id: id });
  }

  function handleImportant() {
    dispatch({ type: "important", id: id });
  }

  return (
    <li
      className={
        styles.item +
        " " +
        (done ? styles.done : "") +
        " " +
        (important ? styles.important : "")
      }
    >
      <button onClick={handleDone} className={styles["button-done"]}></button>
      <div className={styles["text-container"]}>
        <span>{text}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <button
        onClick={handleImportant}
        className={styles["button-important"]}
      ></button>
    </li>
  );
}

export default memo(TodoItem);
