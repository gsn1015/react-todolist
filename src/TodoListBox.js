import React, {Component} from 'react';
import store from './store';
import Util from './Util';
import {changeValueInput, addItem, deleteItem} from './store/actionCreator';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoListBox extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    render() {
        return (
            <TodoListUI
            inputValue = {this.state.inputValue}
            list = {this.state.list}
            handleChange = {this.handleChange}
            handleClick = {this.handleClick}
            handleDeleteItem = {this.handleDeleteItem}
            ></TodoListUI>    
        )
    }

    componentDidMount() {
        axios.get('/api/todolist').then((res)=> {

        });
    }
    handleChange(e) {
        let action = changeValueInput(e.target.value);
        store.dispatch(action);
    }
    handleClick() {
        let item = {
            uuid: Util.uuid(),
            name: this.state.inputValue,
        }
        let action = addItem(item);
        store.dispatch(action);
    }
    handleDeleteItem(item, index) {
        const action = deleteItem(index);
        store.dispatch(action);
    }
}

export default TodoListBox;