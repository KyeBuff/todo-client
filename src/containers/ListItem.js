import ListItem from '../components/lists/ListItem';
import { connect } from 'react-redux';
import { patchComplete, deleteTask, putTask } from '../actions/api';

const mapDispatchToProps = (dispatch) => {
	return {
		onComplete: (id) => dispatch(patchComplete(id)),
		onDelete: (id) => dispatch(deleteTask(id)),
		editTask: (task) => dispatch(putTask(task)),
	}
}

export default connect(null, mapDispatchToProps)(ListItem);