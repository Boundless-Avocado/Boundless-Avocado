angular.module('boundless.groups', [])

.controller('GroupsController', function($scope, $window, $location, Groups) {
	//hold data here after quering db
	$scope.data = {
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

	 
	$scope.getGroups = function(groupName) {
		console.log('group.js: ' + groupName);
		Groups.getGroups(groupName)
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
		//only the username is need to ping the group
		var name = groupName.name;
		var username = $window.localStorage.getItem('username');
		console.log('pingGroup: ' + username)
		var data = {
			username: username,
			name: name
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
		console.log('getUsers in group.js: ' + groupName.name)
		Groups.getUsers(groupName)
			.then(function(data) {
				console.log(data);
				$scope.data.users = data;
			})
	};

	$scope.userGroups = function() {
		var username = $window.localStorage.getItem('username');
		var data = {
			username: username
		};

		Groups.userGroups(data)
			.then(function() {
				$scope.data.usergroups = data;
				$location.path('/usergroups.html');
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	$scope.getGroups();
});	
