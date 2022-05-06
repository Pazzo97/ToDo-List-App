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

  test('editTask', () => {
    toDoList.addToDo('task1');
    toDoList.addToDo('task2');
    toDoList.addToDo('task3');
    toDoList.updateDescription(1, 'task1 edited');
    document.querySelector('#todo-list').innerHTML = toDoList.renderToDos();
    expect(document.querySelectorAll('#todo-list .list-item')[0].children[0].children[1].value)
      .toBe('task1 edited');
  });

  test('updateCompleted', () => {
    toDoList.addToDo('task1');
    toDoList.addToDo('task2');
    toDoList.addToDo('task3');
    toDoList.updateToDoCompleted(1);
    document.querySelector('#todo-list').innerHTML = toDoList.renderToDos();
    expect(document.querySelectorAll('#todo-list .list-item')[0].children[0].children[0].classList.contains('fa-check'))
      .toBe(true);
  });

  test('clearCompleted', () => {
    toDoList.addToDo('task1');
    toDoList.addToDo('task2');
    toDoList.addToDo('task3');
    toDoList.updateToDoCompleted(1);
    toDoList.updateToDoCompleted(2);
    toDoList.removeAllCompleted();
    document.querySelector('#todo-list').innerHTML = toDoList.renderToDos();
    expect(document.querySelectorAll('#todo-list .list-item').length).toBe(1);
  });
});