const setAllTasks = (tasks) => ({
	type: '[Tasks] setAllTasks',
	payload: tasks,
});

const setCompleteTask = (task) => ({
	type: '[Tasks] updateCompleteTask',
	payload: task,
});

const addTask = (task) => ({
	type: '[Tasks] addTask',
	payload: task,
});


const removeTask = (id) => ({
	type: '[Tasks] removeTask',
	payload: id,
});


const updateTask = (task) => ({
	type: '[Tasks] updateTask',
	payload: task,
});

export {
	setAllTasks,
	setCompleteTask,
	addTask,
	removeTask,
	updateTask
}