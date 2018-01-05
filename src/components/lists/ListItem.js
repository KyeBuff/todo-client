import React, { Component } from 'react';
import Button from '../buttons/Button';

class ListItem extends Component {
	constructor(props){
		super(props);
		this.onTick = this.onTick.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.editTask = this.editTask.bind(this);

		this.state = {
			isEditing: false,
			editedName: this.props.task.get('task'),
		}
	}

	toggleEdit() {
		this.setState({isEditing: !this.state.isEditing});
	}

	editTask(e) {
		e.preventDefault();

		//spread the existing immutable task and overwrite task prop
		const editedTask = {
			...this.props.task.toJS(),
			task: this.state.editedName,
		}

		this.setState({isEditing: !this.state.isEditing});

		//has a name validation
		if(this.state.editedName) {
			this.props.editTask(editedTask);
		}
	}

	onChange(e) {
		const editedName = e.target.value;

		this.setState({editedName});
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
	  		{ complete ? 
	  			<span className="task-status">Complete</span> :
	  			<Button onClick={this.onTick} isDisabled={complete} className="complete-button" />
	  		}
	  		{ this.state.isEditing ? 
	  				<form className="edit-form" onSubmit={this.editTask}>
	  					<input type="text" value={this.state.editedName} onChange={this.onChange}/> 
	  				</form>
	  				:
						<span>{this.props.task.get('task')}</span>
	  		}
	  		{ !this.state.isEditing ? 
	  			<Button className="edit-button" onClick={this.toggleEdit} /> :
	  			null
	  		}
	  		<Button className="delete-button" onClick={this.deleteTask} />
	  	</li>
		)
	}
}

export default ListItem;


