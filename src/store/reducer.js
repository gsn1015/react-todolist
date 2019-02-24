
const defaultState = {
    inputValue: '',
    list: []
};
export default (state = defaultState, action)=> {
    let newState = JSON.parse(JSON.stringify(state));

    if (action.type == 'change_input_value') {
        newState.inputValue = action.inputValue;
        return newState;
    }

    if (action.type == 'add_item') {
        newState.list.push(action.item);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === "delete_item"){
        console.log("action", action.index);
        newState.list.splice(action.index, 1);
        console.log("newState: ", newState);
        return newState;
    }


    return state;
}