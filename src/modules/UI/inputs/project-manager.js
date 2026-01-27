import FormPanel from "./form-panel";

const createProjectForm = new FormPanel("create-project-panel", (data) => {
    const title = data.get("title");
    console.log(`The project title is ${title}`);
});

const renameProjectForm = new FormPanel("rename-project-panel", (data) => {
    const id = data.get("id");
    const current = data.get("current-title");
    const newTitle = data.get("new-title");
    console.log(`The project of ID : ${id} is renamed from ${current} to ${newTitle}`);
});

const deleteProjectForm = new FormPanel("delete-project-panel", (data) => {
    const id = data.get("id");
    const title = data.get("title");
    console.log(`Deleted project ${title} with ${id}`);
})

function loadProject(id){
    console.log(`Loaded project ${id}`)
}

export { createProjectForm, renameProjectForm, deleteProjectForm, loadProject }