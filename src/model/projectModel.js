import Project from "./project";
import { state } from "./state";

const DEFAULT_PROJECT_ID = "Default";

function createProject(data){
    const project = new Project(data.title);
    state.projects.push(project);

    return project.id;
}

function loadProject(serializedData){
    const project = Project.fromSerializedData(serializedData);

    state.projects.push(project);
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
    if(id === DEFAULT_PROJECT_ID) return;

    const index = state.projects.findIndex(project => project.id === id);
    if(index === -1){
        console.log("Removal failed: Project not found!");
        return;
    }

    state.projects.splice(index, 1);
}

function selectProject(id){
    if(id === null || id === state.selectedProjectId){
        console.log("id is null or same: " + id + " - " + state.selectedProjectId)
        state.selectedProjectId = DEFAULT_PROJECT_ID;
        console.log("id is null or same: " + id + " - " + state.selectedProjectId)
         return;
    }

    if(state.projects.some(project => project.id === id)){
        state.selectedProjectId = id;
    }
    else{
        console.log("Selection failed: Project not found!");
    }
}

export {createProject, updateProject, removeProject, selectProject, loadProject};