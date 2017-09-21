let arr = [[], [], [], []];

const resources = (state = arr, action) => {
    switch (action.type){
        case "ADD_RESOURCE":
            if(state[action.id - 1].includes(action.text)){
                return state;
            }
            let pattern = /\s*,\s*/;


            let textArr = action.text.split(pattern);
            for(let i = 0; i < textArr.length;i++){
                let textString = textArr[i];
                if(!state[action.id - 1].includes(textString)){
                    state[action.id - 1].push(textString);
                }
            }

            return state;
            break;
        case "REMOVE_RESOURCE":
            console.log(action);
            let index = state[action.id - 1].indexOf(action.item);
            state[action.id - 1].splice(index,1);
            return state;
    }
    return state;
};
export default resources