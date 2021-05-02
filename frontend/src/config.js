const APIurl =
	window.location.hostname === 'localhost'
		? 'http://localhost:5000'
		: 'https://hello.herokuapp.com/';
export default APIurl;