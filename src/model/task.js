import { format } from "date-fns";
import { formats } from "../Utils/date-utils";

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
        this.dueDate = dueDate;
        this.priority = priority ?? "P0";
        this.status = status ?? "S0";
    }

    get id() {
        return this.#id;
    }

    get dueDateDI(){
        return format(this.dueDate, formats.dateInput);
    }
    get dueDateReadable(){
        return format(this.dueDate, formats.readable);
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