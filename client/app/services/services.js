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

	var makeGroup = function(data) {
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

	//services to authenticate users
.factory('Auth', function($http, $location, $window){ 
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

	var signout = function() {

	};

	var isAuth = function() {

	};

	return {
		signin: signin,
		singup: signup,
		isAuth: isAuth,
		signout: signout
	};
});















