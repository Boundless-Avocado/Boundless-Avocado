angular.module('boundless.groups', [])

.controller('GroupsController', function($scope) {
	//hold data here after quering db
	$scope.data = {
		groupName: 'Test Group Name',
		testData: 'test data here'
	};

	//uses 
	// $scope.getGroups = function() {
	// 	Groups.getAll()
	// 	.then(function (groups) {
	// 		console.log(groups);
	// 		$scope.data = groups;
	// 	})
	// };

	// $scope.getGroups();

})	