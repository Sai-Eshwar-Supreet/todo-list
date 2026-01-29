import Task from "./task";

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

    toSerializedData(){
        return {
            id: this.#id,
            title: this.title,
            tasks: this.#tasks.map(task => task.toSerializedData())
        }
    }

    static fromSerializedData(obj){
        const project = new Project(obj.title);
        project.#id = obj.id;
        project.#tasks = obj.tasks.map(obj => Task.fromSerializedData(obj));

        return project;
    }
}

export default Project;