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
			editedName: ""
		}
	}

	toggleEdit() {
		this.setState({isEditing: !this.state.isEditing});
	}

	editTask(e) {
		e.preventDefault();

		const editedTask = {
			...this.props.task.toJS(),
			task: this.state.editedName,
		}

		this.setState({isEditing: !this.state.isEditing});

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
	  		<Button onClick={this.onTick} isDisabled={complete} value="tick" />
	  		{ this.state.isEditing ? 
	  				<form className="edit-form" onSubmit={this.editTask}>
	  					<input type="text" value={this.state.editedName} onChange={this.onChange}/> 
	  					<input type="submit" value="Done" />
	  				</form>
	  				:
	  				this.props.task.get('task')
	  		}
	  		{ !this.state.isEditing ? 
	  			<Button value="Edit" onClick={this.toggleEdit}/	> :
	  			null
	  		}
	  		<Button value="delete" onClick={this.deleteTask} />
	  	</li>
		)
	}
}

export default ListItem;


