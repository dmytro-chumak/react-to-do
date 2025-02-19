import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./calendar.module.css";

export default function Calendar({ onChose, buttonRef }) {
  const calendarRef = useRef(null);

  useEffect(() => {
    function changeCalendarPosition() {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const calendarRect = calendarRef.current.getBoundingClientRect();
      const top =
        buttonRect.top -
        calendarRect.height -
        parseInt(getComputedStyle(buttonRef.current).marginTop) -
        parseInt(getComputedStyle(calendarRef.current).marginBottom);
      calendarRef.current.style.top = top + "px";
    }

    changeCalendarPosition();

    window.addEventListener("resize", changeCalendarPosition);

    return () => {
      window.removeEventListener("resize", changeCalendarPosition);
    };
  }, []);

  return (
    <div className={styles["calendar-container"]} ref={calendarRef}>
      <button
        className={styles.button}
        onClick={() => {
          onChose(new Date());
        }}
      >
        Today
      </button>
      <button
        className={styles.button}
        onClick={() =>
          onChose(new Date(new Date().setDate(new Date().getDate() + 1)))
        }
      >
        Tomorrow
      </button>
      <button
        className={styles.button}
        onClick={() =>
          onChose(new Date(new Date().setDate(new Date().getDate() + 7)))
        }
      >
        Next week
      </button>
      <MyDatePicker onClick={onChose} />
    </div>
  );
}

function MyDatePicker({ onClick }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        onClick(date);
      }}
      customInput={<button className={styles.button}>Pick a date</button>}
    />
  );
}
