const todoTaskInput = document.getElementById('todoTask');
const addBtn = document.getElementById('addBtn');
const showTodos = document.getElementById('result');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (todoTaskInput.value) {
        const todoItem = document.createElement('li'); // creating new element where todo items will reflect
        todoItem.classList.add('list-item'); // Adding class name 
        todoItem.innerHTML = todoTaskInput.value; 
        showTodos.appendChild(todoItem);
    
        todoTaskInput.value = '';
      }
})
