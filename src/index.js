import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import TodoList from './TodoList';
// import ReduxList from './ReduxList';
import TodoListBox from './TodoListBox';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<TodoList />, document.getElementById('root'));
// ReactDOM.render(<ReduxList />, document.getElementById('root'));
ReactDOM.render(<TodoListBox />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
