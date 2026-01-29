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

function handleTaskSelectEvent(event){

    const trigger = event.target.closest("[data-action]");

    if(!trigger) return;

    const action = trigger.dataset.action;

    if(!action || action !== "select") return;
    selectTask(trigger.dataset.id);
}
function handleTaskDeleteEvent(event){

    const trigger = event.target.closest("[data-action]");

    if(!trigger) return;

    const action = trigger.dataset.action;

    if(!action  || action !== "delete") return;

    deleteTaskPanel.open({id: trigger.dataset.id, title: trigger.dataset.title });
}



function handleTaskSaveEvent(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData);

    taskController.update(formData);
}

const createTaskBtn = document.querySelector("#create-new-task-btn");
createTaskBtn.addEventListener('click', () => createTaskPanel.open());

export { handleTaskSelectEvent, handleTaskDeleteEvent, handleTaskSaveEvent}