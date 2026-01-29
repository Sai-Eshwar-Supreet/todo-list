import { parse } from "date-fns";
import { state } from "../model/state";
import { createTask, removeTask, selectTask, updateTask } from "../model/taskModel"
import { render, saveState } from "./appController";
import { formats } from "../Utils/date-utils";

const taskController = (
    function(){

        function getTaskData(formData){
            const title = formData.get("title");
            const notes = formData.get("notes") ?? "";

            const rawDate = formData.get("dueDate");
            const dueDate = !rawDate? new Date() : parse(rawDate, formats.dateInput, new Date());

            const priority = formData.get("priority") ?? "P0";
            const status = formData.get("status") ?? "S0";

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