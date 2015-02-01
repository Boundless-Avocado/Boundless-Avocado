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
		});

		// We add our $httpInterceptor into the array
		// of interceptors. Think of it like middleware for your ajax calls
	$httpProvider.interceptors.push('AttachTokens');

})

	//dont know what to use controller for here
.controller('BoundlessController', ['$scope', '$location', function ($scope, $location) {
	// console.log($stateParams);s
	$scope.go = function (path) {
		console.log('GO!');
		console.log('redirected');
<<<<<<< HEAD
		$location.path( path );
=======
		$location.path(path);
>>>>>>> 0be5af1d61d99759d82b9ec2b3feedfa19a69a09
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