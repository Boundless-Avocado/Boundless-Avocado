angular.module('boundless', [
	'ui.router',
	'boundless.groups'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	$urlRouterProvider.otherwise('/groups');

	$stateProvider

		.state('groups', {
			templateUrl: 'app/groups/groups.html',
			controller: 'GroupsController',
			url: '/groups'
		})
		
})

.controller('BoundlessController', ['$scope','$stateParams', function($scope, $stateParams){
		console.log($stateParams.name);

}])

.factory('', {

})

// .run(function ($rootScope, $location) {
// 	console.log('run');
// 	$rootScope.$on('$routeChangeStart', function (evt, next, current) {
// 	    // if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
// 	      $location.path('/client/index.html');
// 	      console.log('run');
// 	    // }
// 	  });
// });