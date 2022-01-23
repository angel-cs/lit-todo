import { css } from 'lit'

export const styles = css`
:host {
  contain: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: #1a2b42;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--todo-app-background-color);
}

h2 {
    color: #337a4d;
}

.container {
    width: 40%;
    background-color: #cfe8d8;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
}

new-todo {
    margin-bottom: 1.2rem;
}

.input-container label {
    font-size: .9rem;
    color: #0c6848
}

.input-container input {
    border: solid 2px #0c6848;
    border-radius: .3rem;
}

.input-container input:focus {
    outline: solid 1px #0c6848;
    border-radius: .3rem;
}



button {
    font-size: .6rem;
    border: none;
    margin-left: .2rem;
}

.add-button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: .3rem;
}

.all-todos-container {
    width: 100%;
    padding: 0rem;
    margin-bottom: 1rem;
}

.undone-todos {
    background-color: lightpink;
    width: 100%;
    padding-bottom: .6rem;
}

.done-todos {
    background-color: lightskyblue;
    width: 100%;
    padding-bottom: .6rem;
}

todo-item {
    border-top: 2px solid white;
    border-radius: 3rem;
    padding: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    animation: showing 1s;
}

.todo-options {
    margin: 0 0 0 .7rem;
    display: flex;
    align-items: center;
}

.todo-options button {
}

h3, h4 {
    margin: 0;
}

h3 {
    background-color: black;
    color: lightyellow;
    margin-bottom: .5rem;
    padding: .4rem;
    font-size: 1.2rem;
    font-weight: 500;
}

h4 {
    font-size: 1rem;
    text-align: left;
}

@keyframes showing {
    0%    { opacity: 0.1; }
  80%   { opacity: 0.8; }
  100%  { opacity: 1; }
}
`