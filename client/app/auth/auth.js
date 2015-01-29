angular.module('boundless.auth', [])

//injecting Auth factory from services
.controller('AuthController', function($scope, $window, $location, Auth){
	$scope.user = {};

		//at sign in, user is issued a token
	$scope.signin = function() {
		Auth.signin($scope.user)
			.then(function(token) {
					//this is where we will will set a token/cookie/jwt
				$window.localStorage.setItem('boundless-avocado', token);
				$location.path('/groups');
			})
			.catch(function(error) {
				console.log(error);
			});
	};

		//on signup, user is issued token
	$scope.signup = function() {
		Auth.signup($scope.user) 
				//after singup, user should be redirected to confirmation
				//page while they wait for code
			.then(function() {
				$window.localStorage.setItem('boundless-avocado', token);
				$location.path('/groups');
			})
			.catch(function(error) {
				console.log(error);
			});
	};

		//user provides confirmation code to finalize signup
	// $scope.confirm = function() {
	// 	Auth.confirm($scope.code) 
	// 		.then(function(token) {
	// 				//this is where we will will set a token/cookie/jwt
	// 			$window.localStorage.setItem('boundless-avocado', token);
	// 		})
	// 		.catch(function(error) {
	// 			console.log(error);
	// 		});
	// };


});