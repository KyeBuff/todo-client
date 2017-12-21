import ToDoList from '../components/lists/ToDoList';
import { connect } from 'react-redux';
import { getAllTasks } from '../actions/api';

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