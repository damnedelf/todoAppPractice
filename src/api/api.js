class API {
  #url = null;
  constructor(url) {
    this.#url = url;
  }
  fetchTodos() {
    return fetch(`${this.#url}/todos`, { method: 'GET' });
  }
  createTodo(title) {
    return fetch(`${this.#url}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
  }
  updateTodo(todo) {
    return fetch(`${this.#url}/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: !todo.isCompleted }),
    });
  }

  deleteTodo(todo) {
    return fetch(`${this.#url}/todos/#{todo.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
export default API;
