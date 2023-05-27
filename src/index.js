import './styles.css';
import { projectElement } from './project-element-creator';

//object that stores DOM elements for project creation
const addProjectForm = function() {
    const form = document.getElementById('project-form');
    const title = document.getElementById('title');
    const dueDate = document.getElementById('due-date');
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');

    const resetForm = () => {
        title.value = "";
        dueDate.value = "";
        description.value = "";
        priority.value = "low";
    }

    return{
        title,
        form,
        dueDate,
        description,
        priority,
        resetForm,
    }
}();
    
    addProjectForm.form.addEventListener("submit", function(event){
        event.preventDefault();
        const test = new projectElement(this.title, this.dueDate, this.description, this.priority);
        content.appendChild(test.createElement());
        addProjectForm.resetForm();
    });

const content = document.getElementById("content");
