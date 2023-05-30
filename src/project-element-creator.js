import { addProjectForm } from './form.js';
import { projectView } from './project-view.js';
import { projectArray } from './array.js';

class projectElement {
    constructor(title, date, description, priority, index){
        this.title = title,
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.index = index;
    }

    createElement = function() {
        const element = document.createElement('div');
        element.classList.add("project");

        const h3 = document.createElement('h3');
        h3.textContent = this.title;
        h3.classList.add("p-title");

        const p = document.createElement('p');
        p.textContent = this.description;
        p.classList.add("p-description");

        const button = document.createElement('button');
        button.textContent = "view";
        button.classList.add("p-button");

        element.appendChild(h3);
        element.appendChild(p);
        element.appendChild(button);

        if(this.priority.value === "medium"){
            element.classList.add("medium");
        } else if(this.priority === "high"){
            element.classList.add("high");
        }

        let index = this.index;

        button.addEventListener("click", function(){
            const viewProject = new projectView(projectArray[index].title, projectArray[index].date, projectArray[index].description, projectArray[index].priority);
            document.body.appendChild(viewProject.createElement());
        });

        return element;
    }

    log = function(){
        console.log(this.title);
        console.log(this.date);
        console.log(this.index);
    }
}

export {projectElement};