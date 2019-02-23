import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Util from './Util';
import './todo.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [],
            count: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCheck  = this.handleCheck.bind(this);
    }
    render() {
        return (
            <Fragment>
                {
                    //输入框
                }
                <label htmlFor="insert">请输入内容</label>
                <input placeholder="请输入内容" id="insert" className="input" value={this.state.inputValue} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>提交</button>
                <ul>
                    {
                        this.state.list.map((item, index)=> {
                            return (
                                <div key={item.uuid}>  
                                    <TodoItem content={item.name} index={index} deleteItem={this.removeItem} checkItem={this.handleCheck}></TodoItem>
                                </div>
                                // <li key={index} dangerouslySetInnerHTML={{__html: item}} onClick={this.removeItem.bind(this, index)}></li>
                                
                            )
                        })
                    }
                </ul>
                <span>{this.state.count} items left</span>
            </Fragment>
        );
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState(()=> { 
            return {
                inputValue: value
            }   
        });
        // this.setState({
        //     inputValue: e.target.value,
        // })
    }

    handleClick() {
        // let list = [...this.state.list, this.state.inputValue];
        if (this.state.inputValue) {
            let value = {
                uuid: Util.uuid(),
                name: this.state.inputValue
            }
            this.setState((preState)=> {
                return {
                    list: [...preState.list, value],
                    inputValue: '',
                    count: this.state.count + 1,
                }
            })
        }
        // this.setState({
        //     list: list,
        //     inputValue: '',
        // })
    }

    removeItem(index, checkedFlag) {
        let list = [...this.state.list];
        list.splice(index, 1);

        console.log("checkedFlag: ", checkedFlag, "count: ", this.state.count);
        this.setState((preState)=> {
            return {
                list: list,
                count: checkedFlag ? this.state.count:  this.state.count-1,
            }
        })
    }

    handleCheck(checkedFlag) {
        let count;
        if (checkedFlag) {
            count = this.state.count - 1;
        } else {
            count = this.state.count + 1;
        }
        // console.log(count,"count");
        this.setState((preState)=> {
            return {
                count: count,
            }
        })
    }
}

export default TodoList;