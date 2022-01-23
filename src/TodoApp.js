import { html, LitElement } from 'lit';
import { styles } from './styles.js';

export class TodoApp extends LitElement {
  static get properties() {
    return {
      tasks: {
        type: Array,
        attribute: false,
        converter: tasks => {
          const tasksToArray = JSON.parse(tasks)
          return tasksToArray.map((el, i) => (
            {
              id: i + 1,
              task: el,
              completed: false
            }
          ))
        }
      },
      thereAreDoneTasks: { type: Boolean, attribute: false },
      thereAreUndoneTasks: { type: Boolean, attribute: false },
    };
  }

  static get styles() {
    return styles
  }

  constructor() {
    super();
    this.title = 'Todo app';
    this.tasks = [];
    this.thereAreDoneTasks = false;
    this.thereAreUndoneTasks = false
  }

  tasksTemplate(completed) {
    const tasksSet = this.tasks.filter(task => task.completed === completed)
    return tasksSet.map(task => html`<todo-item @delete-todo=${this.handleDeleteTodoEvent} @complete-todo=${this.handleCompleteTodoEvent} .task=${task}></todo-item>`)
  }

  handleAddTodoEvent(e) {
    this.addTodo(e.detail.taskName)
  }

  addTodo(taskName) {
    this.tasks = [...this.tasks, {
      id: this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1,
      task: taskName,
      completed: false
    }]
  }

  handleCompleteTodoEvent(e) {
    this.completeTodo(e.detail.todoId)
  }

  completeTodo(todoToCompleteId) {
    const todoToComplete = this.tasks.find(task => task.id === todoToCompleteId)
    todoToComplete.completed = true;
    this.tasks = [...this.tasks.filter(task => task.id !== todoToCompleteId), todoToComplete]
  }

  handleDeleteTodoEvent(e) {
    this.deleteTodo(e.detail.todoId)
  }

  deleteTodo(todoToDeleteId) {
    this.tasks = this.tasks.filter(task => task.id !== todoToDeleteId)
  }

  get undoneTodos() {
    if (this.tasks.find(task => !task.completed)) {
      this.thereAreUndoneTasks = true
    } else {
      this.thereAreUndoneTasks = false
    }

    return html`
      ${this.thereAreUndoneTasks
        ? html`
          <div class="undone-todos">
            <h3>Tasks to do</h3>
            ${this.tasksTemplate(false)}
          </div>
        `
        : html`<div><p>Start adding tasks</p><div>`}
    `
  }

  get doneTodos() {
    if (this.tasks.find(task => task.completed)) {
      this.thereAreDoneTasks = true
    } else {
      this.thereAreDoneTasks = false
    }

    return html`
      ${this.thereAreDoneTasks
        ? html`
          <div class="done-todos">
            <h3>Done tasks</h3>
            ${this.tasksTemplate(true)}
          </div>
        `
        : null}
    `
  }

  render() {
    return html`
    <h2>Tasks</h2>
    <div class="container">
      <new-todo thereAreUndoneTasks=${this.thereAreUndoneTasks} @add-todo=${this.handleAddTodoEvent}></new-todo>
      <div class="all-todos-container">
        ${this.undoneTodos}
        ${this.doneTodos}
      </div>
    </div>
    `;
  }
}
