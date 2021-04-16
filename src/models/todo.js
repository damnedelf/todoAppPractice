class Todo {
  #id = null;
  #title = null;
  #isCompleted = null;
  constructor(id, title, isCompleted) {
    this.#id = id;
    this.#title = title;
    this.#isCompleted = isCompleted;
  }
  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }
  get isCompleted() {
    return this.#isCompleted;
  }
  toggleTodo(val) {
    this.#isCompleted = val === undefined ? !this.#isCompleted : valas;
  }
}
export default Todo;
