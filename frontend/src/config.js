const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://hello.herokuapp.com/';
export default APIurl;