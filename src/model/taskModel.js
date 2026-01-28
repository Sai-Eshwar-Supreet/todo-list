import { state } from "./state";
import Task from "./task";

function createTask(projectId, data){
    const project = state.projects.find(project => project.id === projectId);
    if(!project){
        console.log("Update failed: Project not found!");
        return;
    }
    const task = new Task(...data);

    project.tasks.push(task);

    return task.id;
}

function updateTask(projectId, taskId, data){
    const project = state.projects.find(project => project.id === projectId);
    if(!project){
        console.log("Update failed: Project not found!");
        return;
    }

    const task = project.tasks.find(task => task.id === taskId);
    if(!task){
        console.log("Update failed: Task not found!");
        return;
    }

    task.title = data.title;
    task.notes = data.notes;
    task.dueDate = data.dueDate;
    task.priority = data.priority;
    task.isClosed = data.isClosed;
}

function removeTask(projectId, taskId){

    const project = state.projects.find(project => project.id === projectId);
    if(!project){
        console.log("Removal failed: Project not found!");
        return;
    }

    const index = project.tasks.findIndex(task => task.id === taskId);
    if(index === -1){
        console.log("Removal failed: Task not found!");
        return;
    }

    project.tasks.splice(index, 1);
}

function selectTask(projectId, taskId){
    const project = state.projects.find(project => project.id === projectId);
    if(!project){
        console.log("Selection failed: Project not found!");
        return;
    }
    if(project.tasks.some(task => task.id === taskId)){
        state.selectedTaskId = taskId;
    }
    else{
        console.log("Selection failed: Task not found!");
    }
}

export {createTask, updateTask, removeTask, selectTask};