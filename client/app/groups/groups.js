angular.module('boundless.groups', [])

.controller('GroupsController', function($scope, Groups) {
	//hold data here after quering db
	$scope.data = {
		//this is just dummy data to get the ng-repeat working correctly
		groups: [{groupName: 'Basketball'}, {groupName: 'Tennis'}, {groupName: 'Tap Dancing'}]
	};

	$scope.joinGroup = function(data) {
		console.log(data.groupName);
		Groups.joinGroup(data)
			.then(function() {
				$location.path('/groups');
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	 
	$scope.getGroups = function() {
		Groups.getGroup()
			//server sends back groups which should be an array containing objects
		.then(function (groups) {
			console.log(groups);
			$scope.data.groups = groups.data;
		})
	};

	$scope.createGroup = function() {
		$scope.newGroupName = {};
		Groups.createGroup($scope.newGroupName)
			.then(function() {
			$location.path('/groups');
		})
			.catch(function(error) {
				console.log(error);
			});
	};

});	
