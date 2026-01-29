import { createElementRecursively } from "./factories/dom-factory";
import { handleTaskDeleteEvent, handleTaskSaveEvent } from "./inputs/task-input-manager";

const taskDetailsContainer = document.querySelector("#task-details > .details-container");

function createTaskForm(id, title, dueDate, priority, status, notes){

    const bluePrint = {
        type: "form",
        attributes:{
            action: "",
            method:"post"
        },
        children: [
            {
                type: "div",
                classList: ["form-row", "hidden-element"],
                children: [
                    {
                        type: "input",
                        attributes: {
                            id: "detail-id",
                            type: "text",
                            name: "id",
                            value: id,
                            readonly: true
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
                                attributes: {
                                    value: "P0",
                                    selected: Boolean(priority === "P0")
                                }
                            },
                            {
                                type: "option",
                                textContent: "P1 - Critical",
                                attributes: {
                                    value: "P1",
                                    selected: Boolean(priority === "P1")
                                }
                            },
                            {
                                type: "option",
                                textContent: "P2 - Important",
                                attributes: {
                                    value: "P2",
                                    selected: Boolean(priority === "P2")
                                }
                            },
                            {
                                type: "option",
                                textContent: "P3 - Routine",
                                attributes: {
                                    value: "P3",
                                    selected: Boolean(priority === "P3")
                                }
                            },
                            {
                                type: "option",
                                textContent: "P4 - Low / Optional",
                                attributes: {
                                    value: "P4",
                                    selected: Boolean(priority === "P4")
                                }
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
                        textContent: "Status",
                        attributes: {
                            for: "detail-status"
                        }
                    },
                    {
                        type: "select",
                        attributes: {
                            id: "detail-status",
                            name: "status",
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
                                textContent: "S0 - Not Started",
                                attributes: {
                                    value: "S0",
                                    selected: Boolean(status === "S0")
                                }
                            },
                            {
                                type: "option",
                                textContent: "S1 - In Progress",
                                attributes: {
                                    value: "S1",
                                    selected: Boolean(status === "S1")
                                }
                            },
                            {
                                type: "option",
                                textContent: "S2 - Blocked",
                                attributes: {
                                    value: "S2",
                                    selected: Boolean(status === "S2")
                                }
                            },
                            {
                                type: "option",
                                textContent: "S3 - Review",
                                attributes: {
                                    value: "S3",
                                    selected: Boolean(status === "S3")
                                }
                            },
                            {
                                type: "option",
                                textContent: "S4 - Completed",
                                attributes: {
                                    value: "S4",
                                    selected: Boolean(status === "S4")
                                }
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
                classList: ["tool-list"],
                children: [
                    {
                        type: "button",
                        classList: ["cta", "primary"],
                        textContent: "Save"
                    },
                    {
                        type: "button",
                        classList: ["cta", "secondary", "danger"],
                        textContent: "Delete",
                        attributes: {
                            id: "delete-task-btn",
                            type: "button"
                        },
                        dataset: {
                            id, 
                            title,
                            action: "delete"
                        }
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

    const element = createTaskForm(task.id, task.title, task.dueDateDI, task.priority, task.status, task.notes);

    
    element.addEventListener('submit', handleTaskSaveEvent);
    
    const deleteBtn = element.querySelector("#delete-task-btn");
    deleteBtn.addEventListener('click', handleTaskDeleteEvent)

    taskDetailsContainer.appendChild(element);
}

export {renderTaskDetails};