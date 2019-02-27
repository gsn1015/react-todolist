import React, {Component} from 'react';
import { Button, Input, List } from 'antd';
import './todo.css';


const TodoListUI = (props)=> {
    return (
        <div style={{marginTop: '20px'}}>
            <Input style={{width: '300px'}} value={props.inputValue} onChange={props.handleChange}></Input>
            <Button type="primary" onClick={props.handleClick}>提交</Button>
            <List
            style={{width: '300px', marginTop: '10px'}}
            size="large"
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (<List.Item actions={[<Button onClick={(index, item)=> {props.handleDeleteItem(index, item)}}>delete</Button>]}>{item.name}</List.Item>)}
            />  
        </div>
    )
}

// class TodoListUI extends Component {   
//     render() {
//         return (
//             <div style={{marginTop: '20px'}}>
//                 <Input style={{width: '300px'}} value={this.props.inputValue} onChange={this.props.handleChange}></Input>
//                 <Button type="primary" onClick={this.props.handleClick}>提交</Button>
//                 <List
//                 style={{width: '300px', marginTop: '10px'}}
//                 size="large"
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => (<List.Item actions={[<Button onClick={(index, item)=> {this.props.handleDeleteItem(index, item)}}>delete</Button>]}>{item.name}</List.Item>)}
//                 />  
//             </div>
//         )
//     }
// }

export default TodoListUI;