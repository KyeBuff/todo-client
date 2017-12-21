import axios from 'axios';

export default axios.create({
	baseURL: "http://todo.test/api/",
	headers: {Accept: "application/json"},
});
