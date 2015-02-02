angular.module('boundless.services', [])

	//services to fetch & make groups
.factory('Groups', function($http) {


	var getGroups = function() {
		console.log('getting groups data!');
		return $http({
			method: 'GET',
			url: '/api/groups/'
		})
		.then(function (resp) {
			return resp.data;
		})
	};

	var createGroup = function(data) {
		console.log(data.username + ' created the group: ' + data.name);
		return $http({
			method: 'POST',
			url: '/api/groups/',
			data: data
		})
		.then(function(resp) {
			return resp.data;
		})
	};
		//new entry should added to the memberships join table. 
		// 'data' is an object containing the groups information
	var joinGroup = function(data) {
		// console.log('Joined: ' + data.groupName);
		console.log(data.username +' joined the group: ' + data.name);
		return $http({
			method: 'POST',
			url: '/api/groups/' + data.name + '/',
			data: data
		})
		.then(function(resp) {
			return resp.data;
		})
	};

	var pingGroup = function(data) {
		console.log(data.username + ' pinged the group: ' + data.name);
		return $http({
			method: 'POST',
			url: '/api/groups/' + data.name + '/pings/',
			data: {username: data.username}
		})
		.then(function(resp) {
			return resp.data;
		})
	};

	var getUsers = function(data) {
		return $http({
				method: 'GET',
				url: '/api/groups/' + data.name + '/',
				data: data
		})
		.then(function(resp) {
			return resp.data;
		})
	};

	return {
		getGroups: getGroups,
		createGroup: createGroup,
		joinGroup: joinGroup,
		pingGroup: pingGroup,
		getUsers: getUsers
	};
})

.factory('Auth', function($http, $location, $window){ 
		//Authorization is currently storing username in local storage
	var signin = function(user) {
		console.log(user);
		return $http({
				method: 'POST',
				url: '/api/users/',
				data: user
		})
		.then(function(resp) {
			return resp.data;
		})
	};

		//this should query server for a confirmation code
	var signup = function(user) {
		return $http({
			method: 'POST',
			url: '/api/users/',
			data: user
		})
		.then(function(resp) {
			return resp.data.token;
		})
	};

		//this should query server if confirmation code matches
	var confirm = function(code) {
		return $http({
			method: 'POST',
			url: '/api/users/confirm',
			data: code
		})
		.then(function(resp) {
			return resp.data;
		})
	}

	var signout = function() {
		// $window.localStorage.removeItem('boundless-avocado');
		// $location.path('/signin');
	};
		//checks token to check if user's session is still valid
	var isAuth = function() {
		// return !!$window.localStorage.getItem('boundless-avocado');
	};

	return {
		signin: signin,
		signup: signup,
		isAuth: isAuth,
		signout: signout,
		confirm : confirm
	};
});















