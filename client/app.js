	//main angular app for client side
angular.module('boundless', [
	'ui.router',
	'boundless.groups',
	'boundless.services',
	'boundless.auth'
])
	//using ui-router to route client
.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
		
		//reroutes to '/' as default
	$urlRouterProvider.otherwise('/');

	$stateProvider
			//if at /groups, render groups.html & use GroupsController for the view's controller

		.state('groups', {
			templateUrl: 'app/groups/groups.html',
			controller: 'GroupsController',
			url: '/groups'
		})

		.state('signin', {
			templateUrl: 'app/auth/signin.html',
			controller: 'AuthController',
			url: '/signin'
		})

		.state('signup', {
			templateUrl: 'app/auth/signup.html',
			controller: 'AuthController',
			url: '/signup'
		})

		.state('confirmation', {
			templateUrl: 'app/auth/confirmation.html',
			controller: 'AuthController',
			url: '/confirmation'
		})

		.state('newgroup', {
			templateUrl: 'app/groups/newgroup.html',
			controller: 'GroupsController',
			url: '/newgroup'
		})


		.state('usergroups', {
			templateUrl: 'app/groups/usergroups.html',
			controller: 'GroupsController',
			url: '/usergroups' 
		})

		.state('/', {
			templateUrl: 'app/auth/parent.html',
			controller: 'BoundlessController',
			url: '/'
		})

		.state('/signout', {
			templateUlr: 'app/auth/signout.html',
			controller: 'AuthController',
			url: '/signout'
		})

		.state('/navbar', {
			templateUrl: 'app/auth/parent.html',
			controller: 'BoundlessController',
			url: '/'
		});	
		// We add our $httpInterceptor into the array
		// of interceptors. Think of it like middleware for your ajax calls
	$httpProvider.interceptors.push('AttachTokens');

})

	//dont know what to use controller for here
.controller('BoundlessController', ['$scope', '$location', function ($scope, $location) {
	$scope.go = function (path) {
		$location.path(path);
	};

}])
	
.factory('AttachTokens', function ($window) {
		//here we attach tokens issued by server in order to create sessions. 
		//generic for now, need to update url once server is up
	var attach = {
		request: function (object) {
			var jwt = $window.localStorage.getItem('boundless-avocado');
			if (jwt) {
				object.headers['x-access-token'] = jwt;
			}
			object.headers['Allow-Control-Allow-Origin'] = '*';
			return object;
		}
	};
	return attach;
})

.run(function ($rootScope, $location) {
	console.log('run');
	$rootScope.$on('$routeChangeStart', function (evt, next, current) {
	  $location.path('/');
	  console.log('run');
	});
});