import { List, Map } from 'immutable';

const initialState = Map({
	tasks: List([]),
});

const setAllTasks = (state, payload) => {
	return state.set('tasks', payload);
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case '[Tasks] setAllTasks': 
			return setAllTasks(state, action.payload);
		default: 
			return state;
	}
}

export default reducer;