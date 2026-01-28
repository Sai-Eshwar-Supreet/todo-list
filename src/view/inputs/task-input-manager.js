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

    const trigger = event.target.closest("[data-action]");

    if(!trigger) return;

    const action = trigger.dataset.action;

    if(!action) return;

    switch(action){
        case "select":
            selectTask(trigger.dataset.id);
            break;
        case "delete":
            deleteTaskPanel.open({id: trigger.dataset.id, title: event.currentTarget.dataset.title });
            break;
    }
}

function handleTaskSaveEvent(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData);

    taskController.update(formData);
}

const createTaskBtn = document.querySelector("#create-new-task-btn");
createTaskBtn.addEventListener('click', () => createTaskPanel.open());

export { handleTaskClickEvent, handleTaskSaveEvent}