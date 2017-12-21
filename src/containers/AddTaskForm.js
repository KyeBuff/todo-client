import AddTaskForm from '../components/forms/AddTaskForm';
import { connect } from 'react-redux';
import { postTask } from '../actions/api';

const mapDispatchToProps = dispatch => {
	return {
		onAddTask: (task) => dispatch(postTask(task)),
	}
}

export default connect(null, mapDispatchToProps)(AddTaskForm);