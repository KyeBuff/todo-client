import React, { Component } from 'react';
import ListItem from './ListItem';

class ToDoList extends Component {

	componentDidMount(){
		this.props.onLoad();
	}

	render() {
		return (
			<div>
	 			<ul>
	 				{this.props.tasks.map(task => <ListItem key={task.get('id')} task={task} />)}
	 			</ul>
	  	</div>
		)
	}
}

export default ToDoList;
