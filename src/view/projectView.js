import { createElementRecursively } from "./factories/dom-factory";
import { handleProjectClickEvent } from "./inputs/project-input-manager";

const projectContainer = document.querySelector("#projects > .container > .list-container");

function createProject(id, title){

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
                        type: "button",
                        textContent: "Edit",
                        dataset: {
                            id,
                            action: "edit"
                        }
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
            action: "select"
        },
    };

    const projectItemUI = createElementRecursively(bluePrint);

    projectItemUI.addEventListener('click', handleProjectClickEvent);

    return projectItemUI;
};


function renderProjects(projects){
    projectContainer.innerHTML = "";
    for(let project in projects){
        const element = createProject(project.id, project.title)

        projectContainer.appendChild(element);
    }
}

export {renderProjects};