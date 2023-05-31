import { DOMHandler } from "./DOMHandler.js";
import { projectArray } from "./array.js";
import { elementArray } from "./elementArray.js";

class editForm {
    constructor(index) {
        this.index = index;
    }

    createElement = function() {
        const container = document.createElement('div');
        container.classList.add('form-edit');

        const form = document.createElement('form');
        form.setAttribute('action', '');
        form.setAttribute('class', 'project-edit');
        container.appendChild(form);

        const fieldset = document.createElement('fieldset');
        form.appendChild(fieldset);

        const legend = document.createElement('legend');
        legend.textContent = "Edit Project";
        fieldset.appendChild(legend);

        const div1 = document.createElement('div');
        div1.classList.add("form-input");
        fieldset.appendChild(div1);

        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'title');
        titleLabel.textContent = "Title:";
        div1.appendChild(titleLabel);

        const title = document.createElement('input');
        title.setAttribute('type', 'text');
        title.setAttribute('name', 'title');
        title.setAttribute('class', 'title');
        div1.appendChild(title);

        const div2 = document.createElement('div');
        div2.classList.add('form-input');
        fieldset.appendChild(div2);

        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'due-date');
        dateLabel.textContent = "Due Date:";
        div2.appendChild(dateLabel);

        const date = document.createElement('input');
        date.setAttribute('type', 'date');
        date.setAttribute('name', 'due-date');
        date.classList.add("due-date");
        div2.appendChild(date);

        const div3 = document.createElement('div');
        div3.classList.add('form-input');
        fieldset.appendChild(div3);

        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', 'description');
        descriptionLabel.textContent = "Description:";
        div3.appendChild(descriptionLabel);

        const description = document.createElement('textarea');
        description.setAttribute('name', 'description');
        description.classList.add("form-input");
        description.setAttribute('cols', '30');
        description.setAttribute('rows', '10');
        div3.appendChild(description);

        const div4 = document.createElement('div');
        div4.classList.add('form-input');
        fieldset.appendChild(div4);

        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = "Priority:";
        div4.appendChild(priorityLabel);

        const priority = document.createElement('select');
        priority.setAttribute('name', 'priority');
        div4.appendChild(priority);

        const option1 = document.createElement('option');
        option1.setAttribute('value', 'low');
        option1.classList.add('option-low');
        option1.textContent = "Low";
        priority.appendChild(option1);

        const option2 = document.createElement('option');
        option2.setAttribute('value', 'medium');
        option2.classList.add('option-medium');
        option2.textContent = "Medium";
        priority.appendChild(option2);

        const option3 = document.createElement('option');
        option3.setAttribute('value', 'high');
        option3.classList.add('option-high');
        option3.textContent = "High";
        priority.appendChild(option3);

        const div5 = document.createElement('div');
        div5.classList.add("edit-button-container");
        fieldset.appendChild(div5);

        const doneBtn = document.createElement('button');
        doneBtn.classList.add("submit");
        doneBtn.textContent = "Done";
        div5.appendChild(doneBtn);

        let index = this.index;
        doneBtn.addEventListener("click", function(event) {
            event.preventDefault();
            projectArray[index].title = title.value;
            projectArray[index].date = date.value;
            projectArray[index].description = description.value;
            projectArray[index].priority = priority.value;
            elementArray[index].refreshElement();
            DOMHandler.unappendContent(container);
        });

        title.value = projectArray[this.index].title;
        date.value = projectArray[this.index].date;
        description.value = projectArray[this.index].description;
        priority.value = projectArray[this.index].priority;

        return container;
    }
}

export { editForm };