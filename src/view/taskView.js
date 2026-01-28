import { createElementRecursively } from "./factories/dom-factory";
import { handleTaskClickEvent } from "./inputs/task-input-manager";

const taskContainer = document.querySelector("#tasks > .container > .list-container");

function createTask(id, title, dueDate, isComplete){

    const bluePrint = {
        type: "li",
        children: [
            {
                type: "div",
                classList: [],
                children: [
                    {
                        type: "p",
                        textContent: title,
                    },
                    {
                        type: "p",
                        textContent: dueDate
                    },
                    {
                        type: "button",
                        textContent: "Delete",
                        dataset: {
                            id,
                            action: "delete"
                        }
                    }
                ]
            }
        ],
        dataset: {
            id,
            title,
            isComplete,
            action: "select"
        },
    };

    const taskItemUI = createElementRecursively(bluePrint);

    taskItemUI.addEventListener('click', handleTaskClickEvent);

    return taskItemUI;
};


function renderTasks(tasks){
    taskContainer.innerHTML = "";
    for(let task of tasks){
        const element = createTask(task.id, task.title, task.dueDate, task.isComplete)

        taskContainer.appendChild(element);
    }
}

export {renderTasks};