function createElement({type, textContent = undefined, classList = [], dataset = {}, attributes = {} }){
    if(!type || typeof(type) !== 'string') throw Error(`Expected type string. Provided: ${type}`);

    const element = document.createElement(type);

    if(!!textContent && typeof textContent === 'string') element.textContent = textContent;

    if(Array.isArray(classList) && classList.length > 0){
        element.classList.add(...classList.filter(c => (!!c && typeof c === "string")));
    }

    if(!!dataset && typeof dataset === "object"){
        const keys = Object.keys(dataset);
        for(let key of keys){
            element.dataset[key] = dataset[key];
        }
    }

    if(!!attributes && typeof attributes === "object"){
        const keys = Object.keys(attributes);
        for(let key of keys){
            element.setAttribute(key, attributes[key]);
        }
    }

    return element;
}

function createElementRecursively(blueprint){
     if(!blueprint || (typeof blueprint !== 'object')) return;
    const parent = createElement(blueprint);

    if(!parent) return;

    const children = blueprint.children;

    if(!!children && Array.isArray(children)){

        const nodes = children
            .map(childBlueprint => createElementRecursively(childBlueprint))
            .filter(Boolean);

        parent.append(...nodes);
    }

    return parent;
}

export {createElement, createElementRecursively};