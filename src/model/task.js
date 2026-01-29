class Task{
    #id;
    title;
    notes;
    dueDate;
    priority;
    status;

    constructor(title, notes = "", dueDate = Date.now(), priority="P0", status="S0"){
        this.#id = crypto.randomUUID();
        this.title = title;
        this.notes = notes;
        this.dueDate = !dueDate ? new Date(Date.now()).toLocaleDateString('en-GB') : dueDate;
        this.priority = priority ?? "P0";
        this.status = status ?? "S0";
    }

    get id() {
        return this.#id;
    }

    toSerializedData(){
        return {
            id: this.#id,
            title: this.title,
            notes: this.notes,
            dueDate: this.dueDate,
            priority: this.priority,
            status: this.status,
        }
    }

    static fromSerializedData(obj){
        const task = new Task(obj.title, obj.notes, obj.dueDate, obj.priority, obj.progress);
        task.#id = obj.id;

        return task;
    }
}

export default Task;