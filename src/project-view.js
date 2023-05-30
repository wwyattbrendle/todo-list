class projectView {
    constructor(title, date, description, priority){
        this.title = title;
        this.date = date;
        this.description = description;
        this.priority = priority;
    }

    createElement = function(){
        const element = document.createElement('div');
        element.classList.add("project-view");

        const header = document.createElement('div');
        header.classList.add("project-header");

        const h2 = document.createElement('h2');
        h2.classList.add("project-title");
        h2.textContent = this.title;

        const editBtn = document.createElement('button');
        editBtn.classList.add("edit");
        editBtn.textContent = "edit";

        header.appendChild(h2);
        header.appendChild(editBtn);

        const dateEle = document.createElement("div");
        dateEle.classList.add("project-date");
        dateEle.textContent = `Due: ${this.date}`;

        const container = document.createElement('div');
        container.classList.add("todo-list-container");

        const addBtn = document.createElement('button');
        addBtn.classList.add("add");
        addBtn.textContent = "Add Task";

        const tasks = document.createElement("div");
        tasks.classList.add("tasks");

        container.appendChild(addBtn);
        container.appendChild(tasks);

        element.appendChild(header);
        element.appendChild(dateEle);
        element.appendChild(container);

        return element;
    }

    createTask = function(task) {
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
}

export { projectView };