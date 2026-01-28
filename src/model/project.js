class Project{
    #id;
    title;
    #tasks;

    constructor(title){
        this.#id = crypto.randomUUID();
        this.title = title;
        this.#tasks = [];
    }

    get id() {
        return this.#id;
    }

    get tasks(){
        return this.#tasks;
    }

    sortTasks(){
        this.#tasks.sort((a,b) => a.dueDate - b.dueDate);
    }
}

export default Project;