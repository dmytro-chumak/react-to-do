import styles from "./add-todo.module.css";

export default function AddTodo() {
  return (
    <div className={styles["add-todo-container"]}>
      <input
        className={styles["add-todo"]}
        type="text"
        placeholder="Try typing something"
      ></input>
    </div>
  );
}
