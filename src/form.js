import { projectElement } from './project-element-creator.js';
import { DOMHandler } from './DOMHandler.js';
import { arrayElement, projectArray } from './array.js';
import { elementArray } from './elementArray.js';

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

    const getIndex = () => {
        return projectArray.length;
    }
    
    return{
        title,
        form,
        dueDate,
        description,
        priority,
        resetForm,
        getIndex,
    }
}();
    
    addProjectForm.form.addEventListener("submit", function(event){
        event.preventDefault();
        const thisProject = new arrayElement(addProjectForm.title.value, addProjectForm.dueDate.value, addProjectForm.description.value, addProjectForm.priority.value, addProjectForm.getIndex());
        let index = addProjectForm.getIndex();
        thisProject.add();
        const thisElement = new projectElement(projectArray[index].title, projectArray[index].date, projectArray[index].description, projectArray[index].priority, projectArray[index].index);
        DOMHandler.appendContent(thisElement.createElement());
        elementArray.push(thisElement);
        addProjectForm.resetForm();
    });

export {addProjectForm};