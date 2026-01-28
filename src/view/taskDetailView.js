import { createElementRecursively } from "./factories/dom-factory";
import { handleTaskSaveEvent } from "./inputs/task-input-manager";

const taskDetailsContainer = document.querySelector("#task-details > .container > .details-container");

function createTaskForm(id, title, dueDate, priority, isClosed, notes){

    const bluePrint = {
        type: "form",
        attributes:{
            action: "",
            method:"post"
        },
        children: [
            {
                type: "div",
                classList: ["form-row"],
                children: [
                    {
                        type: "input",
                        attributes: {
                            id: "detail-id",
                            type: "text",
                            name: "id",
                            value: id,
                            readonly: true,
                            hidden: true,
                        }
                    }
                ]
            },
            {
                type: "div",
                classList: ["form-row"],
                children: [
                    {
                        type: "label",
                        textContent: "Title",
                        attributes: {
                            for: "detail-title"
                        }
                    },
                    {
                        type: "input",
                        attributes: {
                            id: "detail-title",
                            type: "text",
                            name: "title",
                            placeholder: "Add a title",
                            value: title,
                        }
                    }
                ]
            },
            {
                type: "div",
                classList: ["form-row"],
                children: [
                    {
                        type: "label",
                        textContent: "Due Date",
                        attributes: {
                            for: "detail-date"
                        }
                    },
                    {
                        type: "input",
                        attributes: {
                            id: "detail-date",
                            type: "date",
                            name: "dueDate",
                            value: dueDate,
                        }
                    }
                ]
            },
            {
                type: "div",
                classList: ["form-row"],
                children: [
                    {
                        type: "label",
                        textContent: "Priority",
                        attributes: {
                            for: "detail-priority"
                        }
                    },
                    {
                        type: "select",
                        attributes: {
                            id: "detail-priority",
                            name: "priority",
                            value: priority,
                        },
                        children: [
                            {
                                type: "button",
                                children: [
                                    {
                                        type: "selectedcontent"
                                    }
                                ]
                            },
                            {
                                type: "option",
                                textContent: "P0 - Immediate",
                                value: "P0"
                            },
                            {
                                type: "option",
                                textContent: "P1 - Critical",
                                value: "P1"
                            },
                            {
                                type: "option",
                                textContent: "P2 - Important",
                                value: "P2"
                            },
                            {
                                type: "option",
                                textContent: "P3 - Routine",
                                value: "P3"
                            },
                            {
                                type: "option",
                                textContent: "P4 - Low / Optional",
                                value: "P4"
                            }
                        ]
                    }
                ]
            },
            {
                type: "div",
                classList: ["form-row"],
                children: [
                    {
                        type: "label",
                        textContent: "Is Closed",
                        attributes: {
                            for: "detail-closed"
                        }
                    },
                    {
                        type: "input",
                        attributes: {
                            id: "detail-closed",
                            type: "checkbox",
                            name: "isClosed",
                            checked: Boolean(isClosed),
                        }
                    }
                ]
            },
            {
                type: "div",
                classList: ["form-row"],
                children: [
                    {
                        type: "label",
                        textContent: "Notes",
                        attributes: {
                            for: "detail-notes"
                        }
                    },
                    {
                        type: "textarea",
                        attributes: {
                            id: "detail-notes",
                            name: "notes",
                            placeholder: "Add notes",
                            value: notes,
                        }
                    }
                ]
            },
            {
                type: "div",
                classList: ["form-row"],
                children: [
                    {
                        type: "button",
                        textContent: "Save"
                    }
                ]
            }
        ]
    };

    const projectDetailsUI = createElementRecursively(bluePrint);

    return projectDetailsUI;
};


function renderTaskDetails(task){
    taskDetailsContainer.innerHTML = "";

    if(!task) return;

    const element = createTaskForm(task.id, task.title, task.dueDate, task.priority, task.isClosed, task.notes);

    element.addEventListener('submit', handleTaskSaveEvent);

    taskDetailsContainer.appendChild(element);
}

export {renderTaskDetails};