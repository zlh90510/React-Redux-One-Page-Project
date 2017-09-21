const visibilityFilter = (state = "All",action) =>{
    switch (action.type){
        case "SET_VISIBILITY":
            return action.filter;
    }
    return state
};
export  default  visibilityFilter