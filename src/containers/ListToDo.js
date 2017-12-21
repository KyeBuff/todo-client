import ToDoList from '../components/lists/ToDoList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		listName: 'ToDo',
	}
}

export default connect(mapStateToProps)(ToDoList);