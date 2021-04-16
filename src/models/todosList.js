import { ALL, COMPLETE, INCOMPLETE } from '../constans';
import Todo from './todo';
class TodoList {
  #todos = [];
  constructor(todos = []) {
    this.#todos = todos;
  }
  getTodos() {
    return this.#todos;
  }
  getTodoById(id) {
    return this.#todos.find((el) => el.id === id);
  }

  addTodo(todo) {
    this.#todos.push(todo);
  }
  deleteTodo(id) {
    const todoIdx = this.#todos.findIndex((el) => el.id === id);
    this.#todos = [
      ...this.#todos.slice(0, todoIdx),
      ...this.#todos.slice(todoIdx + 1),
    ];
  }
  filterTodos(filter) {
    switch (filter) {
      case ALL:
        return this.#todos;
      case COMPLETE:
        return this.#todos.filter((el) => el.isCompleted);
      case INCOMPLETE:
        return this.#todos.filter((el) => !el.isCompleted);
      default:
        return this.#todos;
    }
  }
}
export default TodoList;
