class FormPanel{
    #dialog;
    #form;
    #onSubmit

    constructor(id, onSubmit){
        if(typeof onSubmit  === 'function') this.#onSubmit = onSubmit;

        this.#dialog = document.querySelector(`#${id}`);
        this.#form = this.#dialog.querySelector("form");
        const close = this.#dialog.querySelector(`#${id}-close`);

        this.#form.addEventListener('submit', (event) => this.#submit(event));
        close.addEventListener('click', () => this.close());
    }

    open(data){
        this.#form.reset();

        if(!!data){
            for(let key of Object.keys(data)){
                const input = this.#form.querySelector(`[name="${key}"]`);
                input.setAttribute("value", data[key]);
            }
        }

        this.#dialog.showModal();
    }
    
    close(){
        this.#form.reset();
        this.#dialog.close();
    }

    #submit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        console.log(formData);
        
        if(!!this.#onSubmit) this.#onSubmit(formData);
        
        this.close();
    }
}

export default FormPanel;