import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/todo-app.js';
import { TodoApp } from '../src/TodoApp.js';


describe('TodoApp', () => {
  it('element exists and has properties', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);
    expect(element).instanceOf(TodoApp)
    expect(element).to.have.property('tasks')
    element.title.should.equal('Todo app')
  });

  it('adds an undone task converting string to object', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);
    await element.addTodo('nueva tarea')
    element.tasks.should.deep.include({ id: 1, task: 'nueva tarea', completed: false })
    await element.addTodo('otra tarea')
    element.tasks.should.deep.include({ id: 2, task: 'otra tarea', completed: false })
  })

  it('deletes todo by id arg', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);
    const firstTask = { id: 1, task: 'primera tarea', completed: false }
    const secondTask = { id: 2, task: 'segunda tarea', completed: true }

    element.tasks = [firstTask, secondTask];
    element.deleteTodo(1);
    element.tasks.should.deep.equal([secondTask]);

    element.tasks = [firstTask, secondTask];
    element.deleteTodo(2)
    element.tasks.should.deep.equal([firstTask]);
  })

  it('completes todo by id arg', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);
    const firstTask = { id: 1, task: 'primera tarea', completed: true }
    const secondTask = { id: 2, task: 'segunda tarea', completed: false }

    element.tasks = [firstTask, secondTask];
    element.completeTodo(2);
    element.tasks.find(task => task.id === firstTask.id).should.deep.equal({
      ...firstTask, completed: true
    })
  })

  it('passes the a11y audit', async () => {
    const element = await fixture(html`<todo-app></todo-app>`);
    await expect(element).shadowDom.to.be.accessible();
  });
});
