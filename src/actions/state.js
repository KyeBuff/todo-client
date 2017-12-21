const setAllTasks = (tasks) => {
	return {
		type: '[Tasks] setAllTasks',
		payload: tasks,
	}
};

export {
	setAllTasks
}