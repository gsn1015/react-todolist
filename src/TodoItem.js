import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liStyle: {
                display:'inline-block',
            },
            checked: false,
        };
        this.remove = this.remove.bind(this)
        this.checkBox = this.checkBox.bind(this)
    }

    render() {
        return (
            <div>
                <input type="checkbox" onClick={this.checkBox}></input>
                <li style={this.state.liStyle}>{this.props.content}</li>
                <button type="button" onClick={this.remove}>x</button>
            </div>
        )
    }

    remove() {
        const {index, deleteItem} = this.props;
        console.log("index: ",index, "checked: ", this.state.checked);
        deleteItem(index, this.state.checked);
    }

    checkBox(e) {
        console.log(e.target.checked, this.props.index);
        const {checkItem} = this.props;
        if (e.target.checked) {
            let liStyle = {
                display:'inline-block',
                textDecoration:'line-through',
            }
            this.setState((preState)=> {
                return {
                    checked: true,
                    liStyle: liStyle,
                }
            });
            checkItem(true);
        } else {
            let liStyle = {
                display:'inline-block',
            }
            this.setState((preState)=> {
                return {
                    checked: false,
                    liStyle: liStyle,
                }
            });
            checkItem(false);
        }
    }
}

export default TodoItem;