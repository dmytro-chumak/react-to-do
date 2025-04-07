import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./calendar.module.css";

export default function Calendar({ onChose, buttonRef }) {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (!buttonRef.current || !calendarRef.current) return;

    function changeCalendarPosition() {
      requestAnimationFrame(() => {
        if (!buttonRef.current || !calendarRef.current) return;

        const buttonRect = buttonRef.current.getBoundingClientRect();
        const calendarRect = calendarRef.current.getBoundingClientRect();

        const buttonStyles = getComputedStyle(buttonRef.current);
        const calendarStyles = getComputedStyle(calendarRef.current);

        // Перевірка, чи достатньо місця зверху
        const topPosition =
          buttonRect.top -
          calendarRect.height -
          parseInt(buttonStyles.marginTop, 10) -
          parseInt(calendarStyles.marginBottom, 10);

        // Якщо зверху недостатньо місця, показуємо знизу
        if (topPosition < 0) {
          const bottomPosition =
            buttonRect.bottom +
            parseInt(buttonStyles.marginBottom, 10) +
            parseInt(calendarStyles.marginTop, 10);
          calendarRef.current.style.top = `${bottomPosition}px`;
        } else {
          calendarRef.current.style.top = `${topPosition}px`;
        }
      });
    }

    // Викликаємо функцію після невеликої затримки, щоб DOM встиг рендеритись
    const timeoutId = setTimeout(changeCalendarPosition, 0);

    window.addEventListener("resize", changeCalendarPosition);
    window.addEventListener("scroll", changeCalendarPosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", changeCalendarPosition);
      window.removeEventListener("scroll", changeCalendarPosition);
    };
  }, [buttonRef]);

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
