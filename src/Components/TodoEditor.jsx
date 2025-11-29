import styles from "./TodoEditor.module.css";
import { Component } from "react";

export default class TodoEditor extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const text = e.currentTarget.elements.todo.value.trim();
    if (!text) return;

    this.props.onAddTodo(text);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className={styles.input} name="todo" />
        <button className={styles.button}>Add</button>
      </form>
    );
  }
}
