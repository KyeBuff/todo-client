import axios from '../axios.js';
import { fromJS } from 'immutable';
import { setAllTasks } from './state';

const getAllTasks = () => dispatch => {

	axios.get("/tasks").then(response => {
		const tasks = fromJS(response.data);

		dispatch(setAllTasks(tasks));
	});

};

export {
	getAllTasks
}