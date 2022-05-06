/**
 * @jest-environment jsdom
 */
import ToDoList from './src/modules/todo-list.js';

describe('ToDoList', () => {
  let toDoList;
  beforeEach(() => {
    toDoList = new ToDoList();
    document.body.innerHTML = '<ul id="todo-list"></ul>';
    localStorage.clear();
  });

  it('should add a new task to the list', () => {
    toDoList.addToDo('test');
    document.querySelector('#todo-list').innerHTML = toDoList.renderToDos();
    const list = document.querySelectorAll('#todo-list .list-item');
    expect(list)
      .toHaveLength(1);
  });

  it('should remove a task from the list', () => {
    toDoList.addToDo('test');
    toDoList.addToDo('test2');
    toDoList.removeToDo(1);
    document.querySelector('#todo-list').innerHTML = toDoList.renderToDos();
    const list = document.querySelectorAll('#todo-list .list-item');
    expect(list)
      .toHaveLength(1);
  });
});