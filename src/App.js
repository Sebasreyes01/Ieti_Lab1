import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";

class App extends Component {
  render() {
    const todos = [{text:"Learn React", priority:3, dueDate: "1/2/2018" },
      {text:"Learn about APIs", priority:3, dueDate: "2/3/2018" },
      {text:"write TODO App", priority:5, dueDate: "4/5/2018" }];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoList todos={todos}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            TODO React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
