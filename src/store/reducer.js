import { CHANGE_INPUT_VALUE, DELETE_ITEM, ADD_ITEM } from './actionType';
const defaultState = {
    inputValue: '',
    list: []
};
export default (state = defaultState, action)=> {
    let newState = JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.inputValue;
        return newState;
    }

    if (action.type === ADD_ITEM) {
        newState.list.push(action.item);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === DELETE_ITEM){
        newState.list.splice(action.index, 1);
        return newState;
    }


    return state;
}