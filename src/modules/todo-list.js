import ToDo from './todo.js';

export default class ToDoList {
  constructor() {
    this.toDos = [];
  }

  addToDo(description) {
    const index = this.toDos.length + 1;
    const toDo = new ToDo(index, description, false);
    this.toDos.push(toDo);
    this.saveToDos();
    this.renderToDos();
  }

  addToDoFromStorage(todos) {
    todos.forEach((todo) => {
      const toDo = new ToDo(todo.index, todo.description, todo.completed);
      this.toDos.push(toDo);
    });
  }

  getToDos() {
    return this.toDos;
  }

  updateDescription(index, description) {
    this.toDos[index - 1].description = description;
    this.toDos[index - 1].completed = false;
    this.saveToDos();
    this.renderToDos();
  }

  removeToDo(id) {
    this.toDos = this.toDos.filter((toDo) => toDo.index !== +id);
    this.rearrangeToDos();
    this.saveToDos();
    this.renderToDos();
  }

  updateToDoCompleted(id) {
    this.toDos[id - 1].completed = !this.toDos[id - 1].completed;
    this.saveToDos();
    this.renderToDos();
  }

  rearrangeToDos() {
    this.toDos.forEach((toDo, index) => {
      toDo.index = index + 1;
    });
    this.saveToDos();
    this.renderToDos();
  }

  removeAllCompleted() {
    this.toDos = this.toDos.filter((toDo) => toDo.completed === false);
    this.rearrangeToDos();
    this.saveToDos();
    this.renderToDos();
  }

  loadToDos() {
    const toDos = JSON.parse(localStorage.getItem('toDos'));
    if (toDos) {
      this.addToDoFromStorage(toDos);
    }
  }

  saveToDos() {
    localStorage.setItem('toDos', JSON.stringify(this.toDos));
  }

  renderToDos() {
    return this.toDos.map((toDo) => `<li class="list-item" data-id=${toDo.index} >
          <span> <input type="checkbox" name="checkbox" data-id=${toDo.index}>
            <input type="text" class="todo-description" value="${toDo.description}" data-id=${toDo.index}> </span>
            <i class="fa-solid fa-ellipsis-vertical dots" data-id=${toDo.index}></i>
        </li>
    `)
      .join('');
  }
}