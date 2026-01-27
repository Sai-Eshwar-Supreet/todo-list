class Project{
    #id;
    title;
    taskIds;

    constructor(){
        this.#id = crypto.randomUUID();
    }

    get id() {
        return this.#id;
    }
}

export default Project;