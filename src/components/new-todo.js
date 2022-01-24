import { html, LitElement } from 'lit';
import { addIcon } from '../icons/svgIcons.js';
import { styles } from '../styles.js';

export class NewTodo extends LitElement {
    static get properties() {
        return {
            inputVal: { type: String, attribute: false }
        }
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super()
        this.inputVal = ''
    }

    notifyNewTodo() {
        this.dispatchEvent(new CustomEvent('add-todo', {
            detail: {
                taskName: this.inputVal,
            }
        }))
        this.inputVal = ''
    }

    handleNewTaskInput(e) {
        this.inputVal = e.target.value
        if (this.inputVal && e.key === 'Enter') {
            this.notifyNewTodo()
        }
    }

    handleAddClick(e) {
        e.preventDefault()
        return this.inputVal && this.notifyNewTodo();
    }

    render() {
        return html`
        <div class="input-container">
                <label>Add task
                <input
                    id="task-input"
                    type="text"
                    .value=${this.inputVal}
                    @keypress=${this.handleNewTaskInput}
                />
                </label>
        </div>
        <div class="add-button-container">
            <a id='add-button' aria-label='Add task' href='#' @click=${this.handleAddClick}>${addIcon}</a>
        </div>
        `;
    }
}