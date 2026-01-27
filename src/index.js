import { createProject } from "./modules/UI/factories/project-ui-factory";
import { createProjectForm } from "./modules/UI/inputs/input-manager";
import "./styles/style.css";


const projectsContainer = document.querySelector("#projects > .container > .list-container");
const tasksContainer = document.querySelector("#tasks > .container > .list-container");
const taskDetailsContainer = document.querySelector("#task-details > .container > .details-container");


const el = createProject("Jumbo", crypto.randomUUID());

projectsContainer.appendChild(el);

const createProjectBtn = document.querySelector('#create-project-btn');

createProjectBtn.addEventListener('click', () => createProjectForm.open())
console.log(el);

// ======================================== UI 
// -------------------- INPUT
// -------------------- UPDATES/OUTPUT
// ======================================== CONTROLLER
// -------------------- INPUT VALIDATION
// -------------------- UI / DATA COMMUNICATION
// -------------------- OUTPUT VALIDATION
// ======================================== DATA
// -------------------- DATA MANAGEMENT