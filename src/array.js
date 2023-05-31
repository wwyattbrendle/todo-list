//grab form values
class arrayElement {
    constructor(title, date, description, priority, index) {
        this._title = title;
        this._date = date;
        this._description = description;
        this._priority = priority;
        this._index = index;
        this._tasks = [];
    }

    get title() {return this._title};
    set title(input) {if(input){this._title = input}};

    get date() {return this._date};
    set date(input) {if(input){this._date = input}};

    get description() {return this._description};
    set description(input) {if(input){this._description = input}};

    get priority() {return this._priority};
    set priority(input) {if(input){this._priority = input}};

    get tasks() {return this._tasks};

    get index() {return this._index};

    addTask = function(input){
        this._tasks.push(input);
    }

    add = function() {
        projectArray.push(this);
        console.log(projectArray);
    }
}

const projectArray = [];

export { arrayElement, projectArray };