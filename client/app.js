	//main angular app for client side
angular.module('boundless', [
	'ui.router',
	'boundless.groups',
	'boundless.services',
	'boundless.auth'
])
	//using ui-router to route client
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
		
		//reroutes to '/' as default
	$urlRouterProvider.otherwise('/client');

	$stateProvider
			//if at /groups, render groups.html & use GroupsController for the view's controller
		.state('index', {
			templateUrl: 'client/index.html',
			url: ''
		})

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

		.state('newgroup', {
			templateUrl: 'client/app/groups/newgroup.html',
			controller: 'GroupsController',
			url: '/newgroup'
		})

})

	//dont know what to use controller for here
.controller('BoundlessController', ['$scope','$location','$stateParams', function($scope, $location, $stateParams){
	
	$scope.go = function ( path ) {
		console.log('GO!');
		console.log('redirected');
  		$location.path( path );
	};

}])
	
.factory('AttachTokens', function($window) {
		//here we attach tokens issued by server in order to create sessions. 
		//generic for now, need to update url once server is up
	var attach = {
		request: function(object) {
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
	    // if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
	      $location.path('/client/index.html');
	      console.log('run');
	    // }
	  });
});