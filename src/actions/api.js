import axios from '../axios.js';
import { fromJS } from 'immutable';
import { setAllTasks, setCompleteTask, addTask, removeTask, updateTask } from './state';

// API functions utilising promises

//Initial function immediately retuns a function receiveing dispatch as an argument. Thunks allow us to delay the dispatch of an action, awaiting the server response.

const getAllTasks = () => dispatch => {
	axios.get("/tasks").then(response => {
		const tasks = fromJS(response.data);
		dispatch(setAllTasks(tasks));
	});
};

const patchComplete = id => dispatch => {
	axios.patch("/tasks/"+id+"/complete").then(response => {
		const completeTask = fromJS(response.data);
		dispatch(setCompleteTask(completeTask));
	});

};

const deleteTask = id => dispatch => {
	axios.delete("/tasks/"+id).then(response => {
		dispatch(removeTask(id));
	});

};

const postTask = task => dispatch => {
	axios.post("/tasks", task).then(response => {
		const task = fromJS(response.data);
		dispatch(addTask(task));
	});

};

const putTask = task => dispatch => {
	axios.put("/tasks/"+task.id, task).then(response => {
		const task = fromJS(response.data);
		dispatch(updateTask(task));
	});

};

export {
	getAllTasks,
	patchComplete,
	postTask,
	deleteTask,
	putTask
}