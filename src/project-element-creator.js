import { addProjectForm } from './form.js';
import { projectView } from './project-view.js';
import { projectArray } from './array.js';
import { DOMHandler } from './DOMHandler.js';

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
        element.setAttribute('id', `element${this.index}`);

        const h3 = document.createElement('h3');
        h3.textContent = this.title;
        h3.classList.add("p-title");
        h3.setAttribute('id', `h3${this.index}`);

        const p = document.createElement('p');
        p.textContent = this.description;
        p.classList.add("p-description");
        p.setAttribute('id', `p${this.index}`);

        const button = document.createElement('button');
        button.textContent = "view";
        button.classList.add("p-button");

        element.appendChild(h3);
        element.appendChild(p);
        element.appendChild(button);

        if(this.priority === "medium"){
            element.classList.add("medium");
        } else if(this.priority === "high"){
            element.classList.add("high");
        }

        let index = this.index;

        button.addEventListener("click", function(){
            const viewProject = new projectView(projectArray[index].title, projectArray[index].date, projectArray[index].description, projectArray[index].priority, index);
            DOMHandler.appendBody(viewProject.createElement());
        });

        return element;
    }

    refreshElement = function() {
        const element = document.getElementById(`element${this.index}`);
        const h3 = document.getElementById(`h3${this.index}`);
        const p = document.getElementById(`p${this.index}`);
        h3.textContent = projectArray[this.index].title;
        p.textContent = projectArray[this.index].description;
        if(projectArray[this.index].priority === "low"){
            element.classList.add('low');
            element.classList.remove('medium');
            element.classList.remove('high');
        } else if (projectArray[this.index].priority === "medium"){
            element.classList.add('medium');
            element.classList.remove('low');
            element.classList.remove('high');
        } else {
            element.classList.add('high');
            element.classList.remove('low');
            element.classList.remove('medium');
        }
    }

    log = function(){
        console.log(this.title);
        console.log(this.date);
        console.log(this.index);
    }
}

export {projectElement};