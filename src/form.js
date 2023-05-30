import { projectElement } from './project-element-creator.js';
import { content } from './index.js';
import { arrayElement, projectArray } from './array.js';

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

  /*  const processDate = (adate) => {
        let splitArray = new Array();
        splitArray = adate.split("-");
        let year = splitArray[0];
        let month = splitArray[1];
        let day = splitArray[2];
        let date = new Date(year, month, day);
        return date.toDateString();
    } */

    const getIndex = () => {
        return projectArray.length;
    }

   // const savedDate = processDate(dueDate.value);
    
    return{
        title,
        form,
        dueDate,
        description,
        priority,
    //    savedDate,
        resetForm,
        getIndex,
    }
}();
    
    addProjectForm.form.addEventListener("submit", function(event){
        event.preventDefault();
        const thisProject = new arrayElement(addProjectForm.title.value, addProjectForm.dueDate.value, addProjectForm.description.value, addProjectForm.priority.value, addProjectForm.getIndex());
        let index = addProjectForm.getIndex();
        //console.log(index);
        //console.log(addProjectForm.dueDate.value);
        //console.log(addProjectForm.savedDate);
        thisProject.add();
        const thisElement = new projectElement(projectArray[index].title, projectArray[index].date, projectArray[index].description, projectArray[index].priority, projectArray[index].index);
        thisElement.log();
        content.appendChild(thisElement.createElement());
        addProjectForm.resetForm();
    });

export {addProjectForm};