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
		var name =groupName.name;
		var data = {
			username: username, 
			name: name
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
		var name = $scope.data.newGroup;
		var username = $window.localStorage.getItem('username');
		var data = {
			username: username, 
			name: name
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
		// var name =groupName.name;
		console.log('pingGroup: ' + name)
		var username = $window.localStorage.getItem('username');
		var data = {
			username: username
			// name: name
		};

		Groups.pingGroup(data)
			.then(function() {
				$location.path('/groups');
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	$scope.getUsers = function(groupName) {
		console.log(groupName);
		var name = groupName.name
		Groups.getUsers(name)
			.then(function(data) {
				$scope.data.users = data;
			})
	};

	$scope.getGroups();
});	
