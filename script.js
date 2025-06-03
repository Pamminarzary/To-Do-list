const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
          li.remove();
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });