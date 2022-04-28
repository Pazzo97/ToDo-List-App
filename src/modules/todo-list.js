// class UI
class UI {
  static displayTodos=() => {
    const toDos = [
      {
        index: 1,
        description: 'Wash the dishes',
        completed: false,
      },
      {
        index: 2,
        description: 'Complete todo list project',
        completed: false,
      },
      {
        index: 3,
        description: 'Have fun',
        completed: false,
      },
    ];
    toDos.forEach((todo) => {
      UI.addTodoToList(todo);
    });
  }

  // Method to add todo to list
  static addTodoToList=(todo) => {
    const list = document.querySelector('#todo-list');
    const div = document.createElement('div');
    div.className = 'todo';
    div.innerHTML = `<li class="list-item">
    <span> <input type="checkbox" name="checkbox">
      <input type="text" value="${todo.description}"> </span>
      <i class="fa-solid fa-ellipsis-vertical dots"></i>
  </li>`;
    list.appendChild(div);
  }
}

// Event to display todos(on DOM load)
document.addEventListener('DOMContentLoaded', UI.displayTodos);

export default UI;