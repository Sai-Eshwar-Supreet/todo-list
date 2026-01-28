const taskDetailsContainer = document.querySelector("#task-details > .container > .details-container");

function createTaskForm(id, title){

    const bluePrint = {
        
    };

    const projectItemUI = createElementRecursively(bluePrint);

    return projectItemUI;
};


function renderTaskDetails(task){
    taskDetailsContainer.innerHTML = "";
    const element = createTaskForm(project.id, project.title)

    taskDetailsContainer.appendChild(element);
}

export {renderTaskDetails};