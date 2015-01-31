angular.module('boundless.groups', [])

.controller('GroupsController', function($scope, $window, Groups) {
	//hold data here after quering db
	$scope.data = {
		//this is just dummy data to get the ng-repeat working correctly
		groups: [{groupName: 'Basketball'}, {groupName: 'Tennis'}, {groupName: 'Tap Dancing'}]
	};

	$scope.joinGroup = function(groupName) {
		console.log('data sent: ' + groupName.groupName);
			//should be the jwt stored in local storage
		console.log($window.localStorage.getItem('boundless-avocado'));

		Groups.joinGroup(groupName)
			.then(function() {
				$location.path('/groups');
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	 
	$scope.getGroups = function() {
		Groups.getGroups()
			//server sends back groups which should be an array containing objects
			.then(function (data) {
				console.log(data);
				$scope.data.groups = data.data;
		})
	};
		//passes new group name
	$scope.createGroup = function() {
		console.log('groups.js $scope.data: ' + $scope.data);
		console.log('$scope.data.newGroup ' + $scope.data.newGroup);
		Groups.createGroup($scope.data)
			.then(function() {
			$location.path('/groups');
		})
			.catch(function(error) {
				console.log(error);
			});
	};

});	
