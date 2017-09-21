export const addResource = (id,text) =>{
    let nextTodoId = 0;
    return{
        type: "ADD_RESOURCE",
        id,
        text
    }
};

export const removeResource = (item,id) =>{
    console.log(item);
    return{
        type:"REMOVE_RESOURCE",
        item,
        id
    }
};

export const setVisibility = (filter) =>{
    return{
        type:"SET_VISIBILITY",
        filter
    }
};

export const toggleForm = (id) =>{
    return{
        type:"TOGGLE_FORM",
        id
    }
};


