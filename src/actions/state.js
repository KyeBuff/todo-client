const setAllTasks = (tasks) => {
	return {
		type: '[Tasks] setAllTasks',
		payload: tasks,
	}
};

const setCompleteTask = (task) => {
	return {
		type: '[Tasks] updateCompleteTask',
		payload: task,
	}
};

const addTask = (task) => {
	return {
		type: '[Tasks] addTask',
		payload: task,
	}
};


const removeTask = (id) => {
	return {
		type: '[Tasks] removeTask',
		payload: id,
	}
};


const updateTask = (task) => {
	return {
		type: '[Tasks] updateTask',
		payload: task,
	}
};

export {
	setAllTasks,
	setCompleteTask,
	addTask,
	removeTask,
	updateTask
}