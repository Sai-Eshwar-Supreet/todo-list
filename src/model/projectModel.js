import Project from "./project";
import { state } from "./state";

function createProject(data){
    const project = new Project(data.title);
    state.projects.push(project);

    return project.id;
}

function updateProject(id, data){
    const project = state.projects.find(project => project.id === id);
    if(!project){
        console.log("Update failed: Project not found!");
        return;
    }

    project.title = data.title;
}

function removeProject(id){
    const index = state.projects.findIndex(project => project.id === id);
    if(index === -1){
        console.log("Removal failed: Project not found!");
        return;
    }

    state.projects.splice(index, 1);
}

function selectProject(id){
    if(state.projects.some(project => project.id === id)){
        state.selectedProjectId = id;
    }
    else{
        console.log("Selection failed: Project not found!");
    }
}

export {createProject, updateProject, removeProject, selectProject};