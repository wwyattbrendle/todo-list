const createTask = function(task) {
    const taskBody = document.createElement('div');
    taskBody.classList.add("todo");

    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");

    const taskName = document.createElement('p');
    taskName.textContent = task;

    taskBody.appendChild(checkbox);
    taskBody.appendChild(taskName);

    return taskBody;
}

export { createTask };