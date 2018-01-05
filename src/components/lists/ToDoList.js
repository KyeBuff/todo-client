import React, { Component } from 'react';
import ListItem from '../../containers/ListItem';


class ToDoList extends Component {

	componentDidMount(){
		this.props.onLoad();
	}

	render() {
		return (
 			<ul className="task-list">
 				{this.props.tasks.map(task => <ListItem key={task.get('id')} task={task} />)}
 			</ul>
		)
	}
}

export default ToDoList;
