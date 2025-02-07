import styles from "./title.module.css";

export default function Title({ value }) {
  return <h1 className={styles.title}>{value}</h1>;
}
