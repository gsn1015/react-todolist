import { CHANGE_INPUT_VALUE, DELETE_ITEM, ADD_ITEM } from './actionType';
export const changeValueInput = (value)=> ({
    type: CHANGE_INPUT_VALUE,
    inputValue: value,
});


export const addItem = (item)=> ({
    type: ADD_ITEM,
    item,
});

export const deleteItem = (index)=> ({
    type: DELETE_ITEM,
    index,
});