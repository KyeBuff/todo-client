import { List, Map } from 'immutable';

const initialState = Map({
	tasks: List([]),
});

const setAllTasks = (state, payload) => {
	return state.set('tasks', payload);
}

const updateCompleteTask = (state, task) => {
	return state.update('tasks', tasks => {
		return tasks.map(t => {
			return t.get('id') === task.get('id') ? task : t;
		});
	});
}

const addTask = (state, task) => {
	return state.update('tasks', tasks => tasks.push(task));
}

const removeTask = (state, id) => {
	return state.update('tasks', tasks => tasks.filter(t => t.get('id') !== id));
}

const updateTask = (state, task) => {
	return state.update('tasks', tasks => tasks.map(t => t.get('id') === task.get('id') ? task : t));
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case '[Tasks] setAllTasks': 
			return setAllTasks(state, action.payload);
		case '[Tasks] updateCompleteTask': 
			return updateCompleteTask(state, action.payload);	
		case '[Tasks] addTask': 	
			return addTask(state, action.payload);	
		case '[Tasks] removeTask': 	
			return removeTask(state, action.payload);	
		case '[Tasks] updateTask': 		
			return updateTask(state, action.payload);	
		default: 
			return state;
	}
}

export default reducer;