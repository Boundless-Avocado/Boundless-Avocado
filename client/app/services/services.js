angular.module('boundless.services', [])

	//services to fetch & make groups
.factory('Groups', function($http) {


	var getGroups = function() {
		console.log('getting groups data!');
		return $http({
			method: 'GET',
			url: '/api/groups'
		})
		.then(function (resp) {
			return resp.data;
		})
	};

	var createGroup = function(newGroup) {
		console.log(newGroup);
		return $http({
			method: 'POST',
			url: '/api/groups',
			data: newGroup
		})
		.then(function(resp) {
			return resp.data;
		})
	};
		//new entry should added to the memberships join table. 
		// 'data' is an object containing the groups information
	var joinGroup = function(data) {
		// console.log('Joined: ' + data.groupName);
		console.log(data);
		return $http({
			method: 'POST',
			url: '/api/groups',
			data: data
		})
		.then(function(resp) {
			return resp.data;
		})
	};

	var pingGroup = function(data) {
		console.log(data);
		return $http({
			method: 'POST',
			url: '/api/groups',
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
		pingGroup: pingGroup
	};
})

.factory('Auth', function($http, $location, $window){ 
	// services for authentication. On authentication, server will return a JWT from the server
	// that JWT is then stored in localStorage as 'com.shortly'
	// after you signin/signup open devtools, click resources,
	// then localStorage and you'll see your token from the server

	var signin = function(user) {
		console.log(user);
		return $http({
				method: 'POST',
				url: '/api/users/siginin',
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
			url: '/api/users/signup',
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
		$window.localStorage.removeItem('boundless-avocado');
		$location.path('/signin');
	};
		//checks token to check if user's session is still valid
	var isAuth = function() {
		return !!$window.localStorage.getItem('boundless-avocado');
	};

	return {
		signin: signin,
		signup: signup,
		isAuth: isAuth,
		signout: signout,
		confirm : confirm
	};
});















