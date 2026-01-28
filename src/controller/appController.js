import { state } from "../model/state";
import { renderProjects } from "../view/projectView";
import { renderTaskDetails } from "../view/taskDetailView";
import { renderTasks } from "../view/taskView";

function initialize(){

}

function saveState(){
    
}

function loadState(){

}

function render(){
    renderProjects(state.projects);
    const project = state.projects.find(p => p.id === state.selectedProjectId);
    
    const tasks = !!project? project.tasks : [];
    renderTasks(tasks);

    const task = tasks.find(t => t.id === state.selectedTaskId);
    renderTaskDetails(task);
}

export {initialize, saveState, loadState, render};