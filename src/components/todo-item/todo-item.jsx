import styles from "./todo-item.module.css";

export default function TodoItem({ text, done }) {
  return (
    <li className={styles.item + " " + (done ? styles.done : "")}>
      <button className={styles["button-done"]}></button>
      <span>{text}</span>
    </li>
  );
}
