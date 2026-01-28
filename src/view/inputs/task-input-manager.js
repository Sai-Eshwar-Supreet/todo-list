import taskController from "../../controller/taskController";
import FormPanel from "./form-panel";

const createTaskPanel = new FormPanel("create-task-panel", (formData) => {
    taskController.create(formData)
});

const deleteTaskPanel = new FormPanel("delete-task-panel", (formData) => {
    taskController.remove(formData);
})

function selectTask(id) {
    taskController.select(id);
}

function handleTaskClickEvent(event){
    const action = event.target.dataset.action;

    if(!action) return;

    switch(action){
        case "select":
            selectTask(event.target.dataset.id);
            break;
        case "delete":
            deleteTaskPanel.open({id: event.target.dataset.id, title: event.currentTarget.dataset.title });
            break;
    }
}

const createTaskBtn = document.querySelector("#create-new-task-btn");
createTaskBtn.addEventListener('click', () => createTaskPanel.open());

export { handleTaskClickEvent }