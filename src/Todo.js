import React from 'react';

export class Todo extends React.Component {

	render() {
		console.log("key" + this.props.id);
		return (
			<li key={this.props.id}>
				{this.props.text}<br/>
				Priority: {this.props.priority}<br/>
				Date: {this.props.dueDate}
			</li>
		);
	}

}