import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [], text: '', priority:"", dueDate:"" };
		this.handleTodoChange = this.handleTodoChange.bind(this);
		this.handlePriorityChange = this.handlePriorityChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTodoChange(e) {
		this.setState({ text: e.target.value });
	}

	handlePriorityChange(e) {
		this.setState({ priority: e.target.value });
	}

	handleDateChange(e) {
		this.setState({ dueDate: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("1 " + !this.state.text.length);
		if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate.length) {
			return;
		}
		const newItem = {
			text: this.state.text,
			priority: this.state.priority,
			dueDate: this.state.dueDate
			// id: Date.now()
		};
		this.setState(prevState => ({
			items: prevState.items.concat(newItem),
			text: '',
			priority: "",
			dueDate: ""
		}));
	}

	render() {
		const todos = [{text:"Learn React", priority:3, dueDate: "1/2/2018" },
			{text:"Learn about APIs", priority:3, dueDate: "2/3/2018" },
			{text:"write TODO App", priority:5, dueDate: "4/5/2018" }];
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<div>
						<h3>TODO</h3>
						<TodoList items={this.state.items} />
						<form onSubmit={this.handleSubmit}>
							<label htmlFor="new-todo">
								What needs to be done?
							</label><br/>
							<input
								id="new-todo"
								type="text"
								placeholder="New Todo"
								onChange={this.handleTodoChange}
								value={this.state.text}
							/><br/>
							<input
								id="priority"
								type="number"
								placeholder="Priority"
								onChange={this.handlePriorityChange}
								value={this.state.priority}
							/><br/>
							<input
								id="date"
								type="date"
								placeholder="Date(dd/mm/aa)"
								onChange={this.handleDateChange}
								value={this.state.dueDate}
							/><br/>
							<button>
								Add #{this.state.items.length + 1}
							</button>
						</form>
					</div>
					{/*<TodoList todos={todos}/>*/}
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
