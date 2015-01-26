	//main angular app for client side
angular.module('boundless', [
	'ui.router',
	'boundless.groups',
	'boundless.services',
	'boundless.auth'
])
	//using ui-router to route client
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
		
		//reroutes to '/' as 
	$urlRouterProvider.otherwise('/');

	$stateProvider
			//if at /groups, render groups.html & use GroupsController for the view's controller
			.state('groups', {
			templateUrl: 'client/app/groups/groups.html',
			controller: 'GroupsController',
			url: '/groups'
		})

		.state('signin', {
			templateUrl: 'client/app/auth/signin.html',
			controller: 'AuthController',
			url: '/signin'
		})

		.state('signup', {
			templateUrl: 'client/app/auth/signup.html',
			controller: 'AuthController',
			url: '/signup'
		})

		.state('confirmation', {
			templateUrl: 'client/app/auth/confirmation.html',
			controller: 'AuthController',
			url: '/confirmation'
		})

		
})

	//dont know what to use controller for here
.controller('BoundlessController', ['$scope','$location','$stateParams', function($scope, $location, $stateParams){
	
	$scope.go = function ( path ) {
		console.log('redirected');
  $location.path( path );
	};

}])

.run(function ($rootScope, $location) {
	console.log('run');
	$rootScope.$on('$routeChangeStart', function (evt, next, current) {
	    // if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
	      $location.path('/client/index.html');
	      console.log('run');
	    // }
	  });
});