import axios from 'axios';

// Set defaults for Axios config
export default axios.create({
	baseURL: "http://todo.test/api/",
	headers: {Accept: "application/json"},
});
