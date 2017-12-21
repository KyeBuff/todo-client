import React, { Component } from 'react';
import Button from '../buttons/Button';

class ListItem extends Component {
	constructor(props){
		super(props);
		this.onTick = this.onTick.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	onTick() {
		const id = this.props.task.get('id');
		this.props.onComplete(id);
	}

	deleteTask() {
		const id = this.props.task.get('id');
		this.props.onDelete(id);
	}

	render() {
		const complete = this.props.task.get('complete');
		return (
	  	<li className={complete ? "task task-complete" : "task"}>
	  		<Button onClick={this.onTick} isDisabled={complete} value="tick" />
	  		{this.props.task.get('task')}
	  		<Button value="edit" />
	  		<Button value="delete" onClick={this.deleteTask} />
	  	</li>
		)
	}
}

export default ListItem;


