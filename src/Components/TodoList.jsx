import styles from "./TodoList.module.css";

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => (
  <ul className={styles.list}>
    {todos.map((todo) => (
      <li className={styles.item} key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span className={todo.completed ? styles.done : ""}>{todo.text}</span>
        <button onClick={() => onDeleteTodo(todo.id)}>✖</button>
      </li>
    ))}
  </ul>
);
