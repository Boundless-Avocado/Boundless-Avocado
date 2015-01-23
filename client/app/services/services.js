angular.module('boundless.services', [])

.factory('Groups', function ($http) {
	var getGroups = function() {
		return $http({
			method: 'GET',
			url: 'api/groups'
		})
		.then(function (resp) {
			return resp.data;
		})
	}

	return {
		getGroups: getGroups
	}
})