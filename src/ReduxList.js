import React, { Component } from 'react';
// import Button from 'antd/lib/button';
import { Button, Input, List } from 'antd';
import store from './store';
import Util from './Util';
import './todo.css';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);

    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    render() {

        return (
            <div style={{marginLeft: '10px', marginTop: '10px'}}>
                <Input placeholder="请输入内容" id="insert" className="input" value={this.state.inputValue} onChange={this.handleChange}></Input>
                <Button type="primary" onClick={this.handleClick}>提交</Button>
                <List
                style={{width: '300px', marginTop: '10px'}}
                size="large"
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (<List.Item actions={[<Button>edit</Button>, <Button onClick={this.handleDeleteItem.bind(this, index, item)}>delete</Button>]}>{item.name}</List.Item>)}
                />
            </div>
        );
    }

    handleChange(e) {
        // 用store实现
        const action = {
            type: 'change_input_value',
            inputValue: e.target.value,
        }
        store.dispatch(action);
    }


    handleDeleteItem(index, item) {
        const action = {
            type: 'delete_item',
            index: index,
        }
        store.dispatch(action);
        //store.getState();
    }

    handleClick() {       
        if (this.state.inputValue) {
            let item = {
                uuid: Util.uuid(),
                name: this.state.inputValue,
            }
            const action = {
                type: 'add_item',
                item: item,
            }
            store.dispatch(action);
        }
    }

}

export default TodoList;