import '../styles/styles.scss';

import Todo from './models/todo';
import TodoList from './models/todosList';
import { ALL, COMPLETE, INCOMPLETE } from './constans';
import API from './api/api';

// const todo = new Todo(11, 'qwerty', false);
// const todo1 = new Todo(2, 'qwerty2', false);
// const todo2 = new Todo(3, 'qwerty3', true);
// const todo3 = new Todo(4, 'qwerty4', false);
// console.log(todo);

// const todoList = new TodoList();
// let todos = [todo, todo1, todo2, todo3];
// todos.forEach((todo) => todoList.addTodo(todo));
// console.log('content todolist', todoList.getTodos());
// console.log('byid', todoList.getTodoById(11));
// let testTodo = todoList.getTodoById(11);
// // let testTodo2 = new Todo
// todoList.deleteTodo(2);
// console.log('content todolist', todoList.getTodos());
// console.log('all', todoList.filterTodos(ALL));
// console.log('complete', todoList.filterTodos(COMPLETE));
const api = new API();
api.createTodo('fooo1').then((todo) => console.log(todo));
