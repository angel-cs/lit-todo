import { html, LitElement } from 'lit';
import { checkedIcon, deleteIcon, uncheckedIcon } from '../icons/svgIcons.js';
import { styles } from '../styles.js';

export class TodoItem extends LitElement {
    static get properties() {
        return {
            task: { type: Object }
        }
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super()
        this.task = {}
    }

    notifyDeleteTodo(e) {
        e.preventDefault()
        const event = new CustomEvent('delete-todo', {
            detail: {
                todoId: this.task.id,
            }
        })
        this.dispatchEvent(event)
    }

    notifyCompleteTodo(e) {
        e.preventDefault()
        const event = new CustomEvent('complete-todo', {
            detail: {
                todoId: this.task.id,
            }
        })
        this.dispatchEvent(event)
    }

    render() {
        return html`
            <h4>${this.task.task}</h4>
            <div class="todo-options">
                ${!this.task.completed ? html`<a href='#' @click=${this.notifyCompleteTodo}>${uncheckedIcon}</a>` : html`<span>${checkedIcon}</span>`}
                <a href='#' @click=${this.notifyDeleteTodo}>${deleteIcon}</a>
            </div>
        `;
    }
}