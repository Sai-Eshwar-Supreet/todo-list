import { deleteProjectForm, loadProject, renameProjectForm } from "../inputs/project-manager";
import { createElementRecursively } from "./dom-factory";

function handleClickEvent(event){
    const action = event.target.dataset.action;
    if(!action) return;

    switch(action){
        case "load":
            loadProject(event.target.dataset.id);
            break;
        case "rename": 
            renameProjectForm.open({id: event.target.dataset.id , ["current-title"]: event.currentTarget.dataset.title })
            break;
        case "delete":
            deleteProjectForm.open({id: event.target.dataset.id, title: event.currentTarget.dataset.title });
            break;
    }
    
}

export const createProject = function(title, id){

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
                        textContent: "Rename",
                        dataset: {
                            id,
                            action: "rename"
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
            action: "load"
        },
    };

    const projectItemUI = createElementRecursively(bluePrint);

    projectItemUI.addEventListener('click', handleClickEvent);

    return projectItemUI;
};