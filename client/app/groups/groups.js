angular.module('boundless.groups', [])

.controller('GroupsController', function($scope, Groups) {
	//hold data here after quering db
	$scope.data = {
		groupNameTest: 'Test Group Name',
		testData: 'test data here',
		groups: {}
	};

	$scope.joinGroup = function() {
		Groups.joinGroup()
	};

	 
	$scope.getGroups = function() {
		Groups.getGroup()
		.then(function (groupData) {
			console.log(groupData);
			$scope.data.groups = groupData;
		})
	};

	$scope.createGroup = function() {
		Groups.createGroup($scope.data.newGroupName)
		.then(function(groupData) {
			console.log(groupData);
		})
	};

});	
