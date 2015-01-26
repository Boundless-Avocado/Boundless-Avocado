angular.module('boundless.services', [])

	//services to fetch & make groups
.factory('Groups', function ($http) {

	var getGroups = function() {
		return $http({
			method: 'GET',
			url: '/api/groups'
		})
		.then(function (resp) {
			return resp.data;
		})
	};

	var createGroup = function(data) {
		return $http({
			method: 'POST',
			url: '/api/groups',
			data: data
		})
	};

	return {
		getGroups: getGroups,
		makeGroup: makeGroup
	};
})

.factory('Auth', function($http, $location, $window){ 
	// services for authentication. On authentication, server will return a JWT from the server
	// that JWT is then stored in localStorage as 'com.shortly'
	// after you signin/signup open devtools, click resources,
	// then localStorage and you'll see your token from the server

	var signin = function(user) {
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
			return resp.data;
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

	};
		//checks token to check if user's session is still valid
	var isAuth = function() {

	};

	return {
		signin: signin,
		signup: signup,
		isAuth: isAuth,
		signout: signout,
		confirm : confirm,
		createGroup: createGroup,
		getGroups: getGroups
	};
});















