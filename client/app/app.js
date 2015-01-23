//main angular app for client side
angular.module('boundless', [
	'ui.router',
	'boundless.groups'
])
	//using ui-router
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
			//if at /groups, render groups.html & use GroupsController for the view's controller
			.state('groups', {
			templateUrl: 'client/app/groups/groups.html',
			controller: 'GroupsController',
			url: '/groups'
		})

		// .state('groups', {
		// 	templateUrl: 'app/groups/groups.html',
		// 	controller: 'GroupsController',
		// 	url: '/'
		// })

		
})
	//not quite sure what this does yet
// .controller('BoundlessController', ['$scope','$stateParams', function($scope, $stateParams){
		
// }])

// .run(function ($rootScope, $location) {
// 	console.log('run');
// 	$rootScope.$on('$routeChangeStart', function (evt, next, current) {
// 	    // if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
// 	      $location.path('/client/index.html');
// 	      console.log('run');
// 	    // }
// 	  });
// });