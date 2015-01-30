angular.module('boundless.groups', [])

.controller('GroupsController', function($scope, Groups) {
	//hold data here after quering db
	$scope.data = {
		//this is just dummy data to get the ng-repeat working correctly
		groups: [{groupName: 'Basketball'}, {groupName: 'Tennis'}, {groupName: 'Tap Dancing'}]
	};

	$scope.joinGroup = function(groupName) {
		console.log(groupName.groupName);
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

	$scope.createGroup = function() {
		console.log($scope.data.newGroup);
		Groups.createGroup($scope.newGroup)
			.then(function() {
			$location.path('/groups');
		})
			.catch(function(error) {
				console.log(error);
			});
	};

});	
