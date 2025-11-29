import "./App.css";
import { Component } from "react";
import TodoEditor from "./Components/TodoEditor";
import { TodoList } from "./Components/TodoList";
import { Filter } from "./Components/Filter";
import { Info } from "./Components/Info";
import initialTodos from "./Todo.json";

export default class App extends Component {
  state = {
    todos: initialTodos,
    filterText: "",
  };

  deleteTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleFilterChange = (value) => {
    this.setState({ filterText: value });
  };

  toggleTodoStatus = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addTodo = (text) => {
    const newTodo = {
      id: `id-${Date.now()}`,
      text,
      completed: false,
    };

    this.setState((prev) => ({
      todos: [...prev.todos, newTodo],
    }));
  };

  render() {
    const visibleTodos = this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.filterText.toLowerCase())
    );

    const completedCount = this.state.todos.filter(
      (todo) => todo.completed
    ).length;

    return (
      <div className="container">
        <Info total={this.state.todos.length} completed={completedCount} />
        <TodoEditor onAddTodo={this.addTodo} />
        <Filter
          filterValue={this.state.filterText}
          onFilterChange={this.handleFilterChange}
        />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleTodo={this.toggleTodoStatus}
        />
      </div>
    );
  }
}
