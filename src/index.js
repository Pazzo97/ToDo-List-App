import './style.css';
import ToDoList from './modules/todo-list.js';
import { addToList, updateDescription, removeFromList } from './crud.js';

const todoList = new ToDoList();

todoList.loadToDos();

const displayTodos = document.querySelector('#todo-list');
displayTodos.innerHTML = todoList.renderToDos();

// if User clicks on enter add todo
const form = document.querySelector('.add-to-field');
form.addEventListener('keypress', (e) => {
  // if key is enter
  if (e.keyCode === 13) {
    e.preventDefault();
    addToList(todoList);
    displayTodos.innerHTML = todoList.renderToDos();
  }
});

const listenForEventsOnInputs = () => {
  const inputs = document.querySelectorAll('.todo-description');

  if (inputs) {
    inputs.forEach((input) => {
      input.addEventListener('change', (event) => {
        updateDescription(todoList, event.target.dataset.id, event.target.value);
        displayTodos.innerHTML = todoList.renderToDos();
        listenForEventsOnInputs();
      });
    });
    inputs.forEach((input) => {
      input.addEventListener('focus', (event) => {
        event.target.parentElement.classList.toggle('dark');
      });
    });

    inputs.forEach((input) => {
      input.addEventListener('blur', (event) => {
        event.target.parentElement.classList.toggle('dark');
      });
    });
  }
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('dots')) {
    removeFromList(todoList, event.target.dataset.id);
    displayTodos.innerHTML = todoList.renderToDos();
    listenForEventsOnInputs();
  }
});

listenForEventsOnInputs();