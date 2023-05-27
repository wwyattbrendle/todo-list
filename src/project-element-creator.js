class projectElement {
    constructor(title, dueDate, description, priority){
        this.title = title,
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority
    }

    createElement = function() {
        const body = document.createElement('div');
        body.classList.add("project");

        const h3 = document.createElement('h3');
        h3.textContent = title.value;
        h3.classList.add("p-title");

        const p = document.createElement('p');
        p.textContent = description.value;
        p.classList.add("p-description");

        const button = document.createElement('button');
        button.textContent = "view";
        button.classList.add("p-button");

        body.appendChild(h3);
        body.appendChild(p);
        body.appendChild(button);

        if(priority.value === "medium"){
            body.classList.add("medium");
        } else if(priority.value === "high"){
            body.classList.add("high");
        }

        return body;
    }
}

export {projectElement};