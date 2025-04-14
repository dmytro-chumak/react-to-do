"use client";

import styles from "./add-todo.module.css";

import { useContext, useState, useRef } from "react";
import { TasksDispatchContext } from "@/context/TasksContext/TasksContext";

import Calendar from "../calendar/calendar";

/*
  TODO: add date/importance to the created task
  TODO: add a date or importance definition when entering a task name in the input
*/

export default function AddTodo() {
  const buttonRef = useRef(null);
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  function handleSubmit(e) {
    let text = e.target.value.trim();
    let important = false;

    if (!text) return;

    if (text.match(/(?<=\s|^)!(?=\s|$)/)) {
      important = true;
      text = text.replace(/(?<=\s|^)!(?=\s|$)/, "");
    }

    dispatch({
      type: "add",
      text: e.target.value,
      date: date,
      important: important,
    });

    setValue("");
  }

  function handleCalendarToggle() {
    setShowCalendar(!showCalendar);
  }

  function handleCalendarChose(date) {
    setDate(date.toLocaleDateString());
    setShowCalendar(false);
  }

  return (
    <>
      <div className={styles["add-todo-container"]}>
        <input
          className={styles["add-todo"]}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Try typing something"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        ></input>
        <button
          className={styles["calendar-button"]}
          ref={buttonRef}
          onClick={handleCalendarToggle}
        >
          Calendar {`${date}`}
        </button>
      </div>

      {showCalendar && (
        <Calendar onChose={handleCalendarChose} buttonRef={buttonRef} />
      )}
    </>
  );
}
