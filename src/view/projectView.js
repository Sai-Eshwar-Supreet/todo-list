import { Icons } from "../Utils/icons";
import { createElementRecursively } from "./factories/dom-factory";
import { handleProjectClickEvent } from "./inputs/project-input-manager";

const projectContainer = document.querySelector("#projects > .list-container");

function createProject(id, title, isSelected){

    const bluePrint = {
        type: "li",
        classList: ["list-item", "project-item", isSelected? "active-project": ""],
        children: [
            {
                type: "p",
                classList: "title",
                textContent: title,
            },
            {
                type: "div",
                classList: ["tool-list"],
                children: [
                    {
                        type: "button",
                        dataset: {
                            id,
                            action: "edit"
                        },
                        attributes: {
                            innerHTML: Icons.edit
                        }
                    },
                    {
                        type: "button",
                        dataset: {
                            id,
                            action: "delete"
                        },
                        attributes: {
                            innerHTML: Icons.trash
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


function renderProjects(projects, selectedId){
    projectContainer.innerHTML = "";
    for(let project of projects){
        const element = createProject(project.id, project.title, project.id === selectedId)

        projectContainer.appendChild(element);
    }
}

export {renderProjects};