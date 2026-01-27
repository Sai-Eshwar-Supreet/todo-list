class Task{
    #id;
    title;
    notes;
    dueDate;
    priority;

    constructor(){
        this.#id = crypto.randomUUID();
    }

    get id() {
        return this.#id;
    }
}

export default Task;