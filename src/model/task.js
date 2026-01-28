class Task{
    #id;
    title;
    notes;
    dueDate;
    priority;
    isClosed;

    constructor(title, notes = "", dueDate = Date.now(), priority="Easy", isClosed = false){
        this.#id = crypto.randomUUID();
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isClosed = isClosed;
    }

    get id() {
        return this.#id;
    }
}

export default Task;