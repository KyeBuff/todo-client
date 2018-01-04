import ToDoList from '../components/lists/ToDoList';
import { connect } from 'react-redux';
import { getAllTasks } from '../actions/api';

// Have used 3 containers to wrap toDoList with filtered tasks passed down as prop

const mapStateToProps = state => {
	return {
		tasks: state.get('tasks'),
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getAllTasks()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);