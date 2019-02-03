import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

	render() {
		var todos = this.props.todos;
		var todoList = todos.map((todo, id) => <Todo id={id} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>);
		return(
			<ul>{todoList}</ul>
		);
	}

}