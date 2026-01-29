import { state } from "../model/state";
import { createTask, removeTask, selectTask, updateTask } from "../model/taskModel"
import { render, saveState } from "./appController";

const taskController = (
    function(){

        function getTaskData(formData){
            const title = formData.get("title");
            const notes = formData.get("notes");
            const dueDate = formData.get("dueDate");
            const priority = formData.get("priority");
            const status = formData.get("status");

            return {title, notes, dueDate, priority, status};
        }

        function create(formData){
            const id = createTask(state.selectedProjectId, getTaskData(formData));
            
            selectTask(id);

            saveState();
            render();
        }
        
        function update(formData){
            const id = formData.get("id");

            updateTask(state.selectedProjectId, id, getTaskData(formData));

            saveState();
            render();
        }
        
        function remove(formData){
            const id = formData.get("id");
            removeTask(state.selectedProjectId, id);

            saveState();
            render();
        }
        
        function select(id){
            selectTask(state.selectedProjectId, id);

            saveState();
            render();
        }

        return {create, update, remove, select};
    }    
)();



export default taskController;