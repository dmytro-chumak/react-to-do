"use client";

import styles from "./add-todo.module.css";

import { useContext, useState } from "react";

import { TasksDispatchContext } from "@/context/TasksContext/TasksContext";

export default function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  function handleSubmit(e) {
    dispatch({ type: "add", text: e.target.value });

    setValue("");
  }

  return (
    <div className={styles["add-todo-container"]}>
      <input
        className={styles["add-todo"]}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Try typing something"
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
      ></input>
    </div>
  );
}
