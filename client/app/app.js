angular.module('boundless', [
])
.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/signin' ,{
			templateUrl: 'app/auth/singin.html',
			controller: 'AuthController'
		})
		.when('/signup', {
			templateUrl: 'app/auth/singup.html',
			controller: 'AuthController'
		})
})
.factory('') {

})

.run(function ($rootScope, $location, Auth) {
	$rootScope.$on('$routeChangeStart', function (evt, next, current) {
	    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
	      $location.path('/signin');
	    }
	  });
});