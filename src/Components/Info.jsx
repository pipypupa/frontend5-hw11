import styles from "./Info.module.css";

export const Info = ({ total, completed }) => (
  <div className={styles.wrapper}>
    <p>Усього завдань: {total}</p>
    <p>Виконано: {completed}</p>
  </div>
);
