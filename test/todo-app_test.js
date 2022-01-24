import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/todo-app.js';
import { TodoApp } from '../src/TodoApp.js';


describe('TodoApp', () => {
  let firstTask
  let secondTask
  beforeEach(() => {
    firstTask = { id: 1, task: 'primera tarea', completed: false }
    secondTask = { id: 2, task: 'segunda tarea', completed: false }
  })

  it('element exists and has properties', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);
    expect(element).instanceOf(TodoApp)
    expect(element).to.have.property('tasks')
    element.title.should.equal('Todo app')
  });

  it('adds an undone task converting string to object', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);
    await element.addTodo('primera tarea')
    element.tasks.should.deep.include(firstTask)
    await element.addTodo('segunda tarea')
    element.tasks.should.deep.include(secondTask)
  })

  it('deletes todo by id arg', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);

    element.tasks = [firstTask, secondTask];
    await element.deleteTodo(1);
    element.tasks.should.deep.equal([secondTask]);

    element.tasks = [firstTask, secondTask];
    await element.deleteTodo(2)
    element.tasks.should.deep.equal([firstTask]);
  })

  it('completes todo by id arg', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);

    element.tasks = [firstTask, secondTask];
    await element.completeTodo(1);
    element.tasks.find(task => task.id === firstTask.id).should.deep.equal({
      ...firstTask, completed: true
    })
  })

  it('passes the a11y audit', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);
    expect(element).shadowDom.to.be.accessible();
  });
});
