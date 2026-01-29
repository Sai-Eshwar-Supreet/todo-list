import { createProject, removeProject, selectProject, updateProject } from "../model/projectModel"
import { render, saveState } from "./appController";

const projectController = (
    function(){
        function create(formData){
            const title = formData.get("title");
            const id = createProject({title});
            
            selectProject(id);

            saveState();
            render();
        }
        
        function update(formData){
            const id = formData.get("id");
            const title = formData.get("title");
            updateProject(id, {title});

            saveState();
            render();
        }
        
        function remove(formData){
            const id = formData.get("id");
            removeProject(id);

            saveState();
            render();
        }
        
        function select(id){
            selectProject(id);
            render();
        }

        return {create, update, remove, select};
    }    
)();



export default projectController;