import projectController from "../../controller/projectController";
import FormPanel from "./form-panel";

const createProjectForm = new FormPanel("create-project-panel", (formData) => {
    projectController.create(formData);
});

const editProjectForm = new FormPanel("edit-project-panel", (formData) => {
    projectController.update(formData);
});

const deleteProjectForm = new FormPanel("delete-project-panel", (formData) => {
    projectController.remove(formData);
})

function selectProject(id) {
    projectController.select(id);
}

function handleProjectClickEvent(event){

    const trigger = event.target.closest("[data-action]");
    if(!trigger) return;

    const action = trigger.dataset.action;
    if(!action) return;

    switch(action){
        case "select":
            selectProject(trigger.dataset.id);
            break;
        case "edit": 
            editProjectForm.open({id: trigger.dataset.id , title: event.currentTarget.dataset.title })
            break;
        case "delete":
            deleteProjectForm.open({id: trigger.dataset.id, title: event.currentTarget.dataset.title });
            break;
    }
}

const createProjectBtn = document.querySelector("#create-new-project-btn");
createProjectBtn.addEventListener('click', () => createProjectForm.open());

export { handleProjectClickEvent }