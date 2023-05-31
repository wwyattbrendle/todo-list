import { DOMHandler } from "./DOMHandler.js";
import { createTask } from "./task.js";
import { projectArray } from "./array.js";

class projectView {
    constructor(title, date, description, priority, index){
        this.title = title;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.index = index;
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

        const closeBtn = document.createElement('button');
        closeBtn.classList.add("close");
        closeBtn.textContent = "X";

        header.appendChild(h2);
        header.appendChild(editBtn);
        header.appendChild(closeBtn);

        const dateEle = document.createElement("div");
        dateEle.classList.add("project-date");
        dateEle.textContent = `Due: ${this.date}`;

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Add task here')
        input.classList.add("input-project-view");

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
        element.appendChild(input);
        element.appendChild(container);

        closeBtn.addEventListener('click', function() {
            DOMHandler.unappendBody(element);
            console.log(projectArray[index].tasks);
        });

        let index = this.index;

        addBtn.addEventListener('click', function() {
            if(input.value){
                tasks.appendChild(createTask(input.value));
                projectArray[index].addTask(input.value);
            }
        });

        if(projectArray[index].tasks.length > 0){
            for(let i = 0; i < projectArray[index].tasks.length; i++){
                tasks.appendChild(createTask(projectArray[index].tasks[i]));
            }
        }

        return element;
        //editBtn.setAttribute("onclick", "self.close()");
    }

}

export { projectView };