document.addEventListener('DOMContentLoaded', (event) => {
    const taskList = document.getElementById('task-list');
    let draggedTaskId = null;
  
    taskList.addEventListener('dragstart', (event) => {
      draggedTaskId = event.dataTransfer.getData('text/plain');
    });
  
    taskList.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
  
    taskList.addEventListener('drop', (event) => {
      event.preventDefault();
      $('#taskModal').modal('show');
    });
  
    document.getElementById('delete-task').addEventListener('click', () => {
      window.location.href = `/delete/${draggedTaskId}`;
    });
  
    document.getElementById('edit-task').addEventListener('click', () => {
      let newTask = prompt("Edite a tarefa:", taskList.children[draggedTaskId].textContent.trim());
      if (newTask) {
        window.location.href = `/edit/${draggedTaskId}?new_task=${encodeURIComponent(newTask)}`;
      }
    });
  });
  