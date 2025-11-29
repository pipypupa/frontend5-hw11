import styles from "./Filter.module.css";

export const Filter = ({ filterValue, onFilterChange }) => (
  <div className={styles.wrapper}>
    <p className={styles.label}>Фільтр по назві</p>
    <input
      value={filterValue}
      onChange={(e) => onFilterChange(e.target.value)}
      className={styles.input}
    />
  </div>
);
