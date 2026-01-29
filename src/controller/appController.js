import { loadProject } from "../model/projectModel";
import { state } from "../model/state";
import { renderProjects } from "../view/projectView";
import { renderTaskDetails } from "../view/taskDetailView";
import { renderTasks } from "../view/taskView";

import initData from "../model/init-data.json" with {type: "json"};

const SAVE_KEY = "save";

function initialize(){
    loadState();
    render();
}

function saveState(){
    const serializedData = state.projects.map(project => project.toSerializedData());
    const json = JSON.stringify(serializedData);

    console.log(json);

    localStorage.setItem(SAVE_KEY, json);
}

function loadState(){
    const json = localStorage.getItem(SAVE_KEY);

    const projects = !json? initData : JSON.parse(json);

    projects.forEach(project => loadProject(project));

    state.selectedProjectId = "Default";
}

function render(){
    renderProjects(state.projects, state.selectedProjectId);
    const project = state.projects.find(p => p.id === state.selectedProjectId);
    
    const tasks = !!project? project.tasks : [];
    renderTasks(tasks, state.selectedTaskId);

    const task = tasks.find(t => t.id === state.selectedTaskId);
    renderTaskDetails(task);
}

export {initialize, saveState, loadState, render};