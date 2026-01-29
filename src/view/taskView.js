import { createElementRecursively } from "./factories/dom-factory";
import { handleTaskSelectEvent } from "./inputs/task-input-manager";

const taskContainer = document.querySelector("#tasks > .list-container");

function createTask(id, title, dueDate, priority, status, isSelected){

    const bluePrint = {
        type: "li",
        classList: ["list-item", "task-item", `task-${priority}`, isSelected? "active-task": ""],
        children: [
            {
                type: "p",
                classList: ["status-indicator"],
                textContent: status
            },
            {
                type: "p",
                classList: ["title"],
                textContent: title,
            },
            {
                type: "p",
                textContent: dueDate
            }
        ],
        dataset: {
            id,
            title,
            action: "select"
        },
    };

    const taskItemUI = createElementRecursively(bluePrint);

    taskItemUI.addEventListener('click', handleTaskSelectEvent);

    return taskItemUI;
};


function renderTasks(tasks, selectedTaskId){
    taskContainer.innerHTML = "";
    for(let task of tasks){
        const element = createTask(task.id, task.title, task.dueDate, task.priority, task.status, task.id === selectedTaskId)

        taskContainer.appendChild(element);
    }
}

export {renderTasks};