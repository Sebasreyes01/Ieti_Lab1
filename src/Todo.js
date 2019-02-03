import React from 'react';

export class Todo extends React.Component {

	render() {
		return (
			<li key={this.props.id}>
				{this.props.text}. Prioridad: {this.props.priority}<br/>
				{this.props.dueDate}
			</li>
		);
	}

}