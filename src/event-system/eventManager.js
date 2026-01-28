const events = {};

function subscribe(type, ...handlers){
    if(!events[type]){
        console.log(`${type} Event doesn't exist!`);
        createEvent(type);
    }
    
    events[type].push(...handlers);
}

function unsubscribe(type, handler){
    let handlers = events[type];

    if(!handlers){
        console.log(`Cannot unsubscribe. ${type} Event doesn't exist!`);
        return;
    }

    if(handler){
        let index = handlers.findIndex( item  => item === handler);
        if(index !== -1) handlers.splice(index, 1);
    }
}

function createEvent(type){
    if(events[type]){
        console.log(`${type} Event already exists!`);
        return;
    }
    
    events[type] = [];
    console.log(`${type} Event created!`);
}

function deleteEvent(type){
    delete events[type];
    console.log(`${type} Event deleted!`);
}

function raiseEvent(type, data){
    let handlers = events[type];
    
    if(!handlers){
        console.log(`${type} Event already exists!`);
        createEvent(type);
        handlers = events[type];
    }
    
    for(let handler of handlers){
        handler(data);
    }
    
    console.log(`${type} Event raised!`);
}

export {
    createEvent,
    deleteEvent,
    raiseEvent,
    subscribe,
    unsubscribe
};