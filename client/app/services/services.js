angular.module('boundless.services', [])

	//services to fetch & make groups
.factory('Groups', function($http) {


	var getGroups = function() {
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

	var userGroups = function(data) {
		console.log('service ' + data);
		return $http({
			method: 'GET',
			url: '/api/users/' + data.username + '/groups',
			data: data
		})
	};

	return {
		getGroups: getGroups,
		createGroup: createGroup,
		joinGroup: joinGroup,
		pingGroup: pingGroup,
		getUsers: getUsers,
		userGroups: userGroups
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

	var signout = function() {
		$window.localStorage.removeItem('username');
		$location.path('/signin');
	};
		//checks token to check if user's session is still valid
	var isAuth = function() {
		return !!$window.localStorage.getItem('username');
	};

	return {
		signin: signin,
		signup: signup,
		isAuth: isAuth,
		signout: signout,
		confirm : confirm
	};
});















