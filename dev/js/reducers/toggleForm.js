let def = [false, false, false, false];

const formState = (state=def, action) => {
    switch (action.type){
        case "TOGGLE_FORM":
            state[action.id - 1] = !state[action.id - 1];
            return state
    }
    return state;
};
export default formState