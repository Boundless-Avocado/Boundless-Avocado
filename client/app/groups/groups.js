angular.module('boundless.groups', [])

.controller('GroupsController', function($scope, $window, $location, Groups) {
	//hold data here after quering db
	$scope.data = {
		//this is just dummy data to get the ng-repeat working correctly
		// groups: [{groupName: 'Basketball'}, {groupName: 'Tennis'}, {groupName: 'Tap Dancing'}]
		groups: Groups.data
	};

	$scope.joinGroup = function(groupName) {
		var username = $window.localStorage.getItem('username');
		var groupName =groupName.name;
		var data = {
			username: username, 
			name: groupName
		};
		console.log(data.username +' joined the group: ' + data.name);

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
				$scope.data.groups = data;
		})
	};

	$scope.createGroup = function() {
		console.log($scope.data.newGroup)
		//pass groupName & username to create a new group
		var groupName = $scope.data.newGroup;
		var username = $window.localStorage.getItem('username');
		var data = {
			username: username, 
			name: groupName
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
		var groupName =groupName.name;
		console.log('pingGroup: ' + groupName)
		var username = $window.localStorage.getItem('username');
		var data = {
			username: username, 
			name: groupName
		};

		Groups.pingGroup(data)
			.then(function() {
				$location.path('/groups');
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	$scope.getGroups();
});	
