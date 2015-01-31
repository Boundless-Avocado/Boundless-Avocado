angular.module('boundless.groups', [])

.controller('GroupsController', function($scope, $window, Groups) {
	//hold data here after quering db
	$scope.data = {
		//this is just dummy data to get the ng-repeat working correctly
		groups: [{groupName: 'Basketball'}, {groupName: 'Tennis'}, {groupName: 'Tap Dancing'}]
	};

	$scope.joinGroup = function(groupName) {
		var username = $window.localStorage.getItem('username');
		var groupName =groupName.groupName;
		var data = {
			username: username, 
			groupName: groupName
		};

		Groups.joinGroup(data)
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
		//pass groupName & username to create a new group
		var groupName = $scope.data.newGroup;
		var username = $window.localStorage.getItem('username');
		var data = {
			username: username, 
			groupName: groupName
		};

		Groups.createGroup(data)
			.then(function() {
				$location.path('/groups');
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	$scope.pingGroup = function(groupName) {
		//pass groupName & username to ping the group
		var groupName =groupName.groupName;
		var username = $window.localStorage.getItem('username');
		var data = {
			username: username, 
			groupName: groupName
		};

		Groups.pingGroup(data)
			.then(function() {
				$location.path('/groups');
			})
			.catch(function(error) {
				console.log(error);
			});
	};

});	
