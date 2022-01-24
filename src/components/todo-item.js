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

    emitId(eventName) {
        this.dispatchEvent(new CustomEvent(eventName, {
            detail: {
                todoId: this.task.id,
            }
        }))
    }

    notifyDeleteTodo() {
        this.emitId('delete-todo')
    }

    notifyToogleTodo() {
        this.emitId('toogle-todo')
    }

    render() {
        return html`
            <h4>${this.task.task}</h4>
            <div class="todo-options">
                <a
                    href='#'
                    @click=${this.notifyToogleTodo}>${!this.task.completed
                ? uncheckedIcon
                : checkedIcon}
                </a>
                <a href='#' @click=${this.notifyDeleteTodo}>${deleteIcon}</a>
            </div>
        `;
    }
}