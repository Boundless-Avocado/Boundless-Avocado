	//main angular app for client side
angular.module('boundless', [
	'ui.router',
	'boundless.groups',
	'boundless.services'
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

		// .state('signin', {
		// 	templateUrl: 'client/app/signin/signin.html',
		// 	controller: 'GroupsController',
		// 	url: '/signin'
		// })

		
})

	//dont know what to use controller for here
.controller('BoundlessController', ['$scope','$stateParams', function($scope, $stateParams){
		
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