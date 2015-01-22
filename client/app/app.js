angular.module('boundless', [
	'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	$urlRouterProvider.otherwise('/groups');

	$stateProvider
		.state('groups', {
			templateUrl: 'app/group/groups.html',
			controller: 'GroupsController',
			url: '/groups'
		})
		
})

.controller('BoundlessController', ['$scope','$steateParams', function($scope, $stateParams){
		console.log($stateParams.name);

}])

.factory('', {

})

.run(function ($rootScope, $location, Auth) {
	$rootScope.$on('$routeChangeStart', function (evt, next, current) {
	    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
	      $location.path('/');
	    }
	  });
});