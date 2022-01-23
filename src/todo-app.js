import { NewTodo } from './components/new-todo.js';
import { TodoItem } from './components/todo-item.js';
import { TodoApp } from './TodoApp.js';

customElements.define('todo-app', TodoApp);
customElements.define('new-todo', NewTodo);
customElements.define('todo-item', TodoItem);