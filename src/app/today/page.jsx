import styles from "./page.module.css";

import Title from "@/components/title/title";
import CurrentDay from "@/components/current-day/current-day";
import TodoList from "@/components/todo-list/todo-list";
import AddTodo from "@/components/add-todo/add-todo";

export default function Today() {
  return (
    <>
      <div className={styles.header}>
        <Title value="Today" />
        <CurrentDay />
      </div>
      <TodoList />
      <AddTodo />
    </>
  );
}
