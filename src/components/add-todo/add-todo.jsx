"use client";

import styles from "./add-todo.module.css";

import { useContext, useState, useRef } from "react";
import { TasksDispatchContext } from "@/context/TasksContext/TasksContext";

import Calendar from "../calendar/calendar";

/*
  TODO: add date/importance to the created task
  TODO: add a definition of importance/date depending on the selected tab
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
    let extractedDate = "";

    if (!text) return;

    if (text.match(/(?<=\s|^)!(?=\s|$)/)) {
      important = true;
      text = text.replace(/(?<=\s|^)!(?=\s|$)/, "").trim();
    }

    const dateRegex =
      /(?<=\s|^)(\d{1,2})[.\-/](\d{1,2})(?:[.\-/](\d{2,4}))?(?=\s|$)/;
    const dateMatch = text.match(dateRegex);

    if (dateMatch) {
      let [, day, month, year] = dateMatch;

      const currentYear = new Date().getFullYear();
      year = year ? (year.length === 2 ? `20${year}` : year) : currentYear;

      const parsedDate = new Date(`${year}-${month}-${day}`);
      if (!isNaN(parsedDate)) {
        extractedDate = parsedDate.toLocaleDateString();
        text = text.replace(dateRegex, "").trim();
      }
    }

    if (!text) return;

    dispatch({
      type: "add",
      text: text,
      date: extractedDate || date,
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
