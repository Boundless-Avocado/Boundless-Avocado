"use strict";

describe('GroupsController', function () {
  var $scope, $rootScope, createController, Groups, $httpBackend;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('boundless'));
  beforeEach(inject(function($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    Groups = $injector.get('Groups');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('GroupsController', {
        $scope: $scope,
        Groups: Groups
      });
    };
  }));

  it('should have a data property on the $scope', function() {
    createController();
    expect($scope.data).to.be.an('object');
  });

  it('should have a getGroups method on the $scope', function () {
    createController();
    expect($scope.getGroups).to.be.a('function');
  });

  it('should call getGroups() when controller is loaded', function () {
    var mockGroups = [{},{},{}];
    $httpBackend.expectGET("/api/groups/").respond(mockGroups);
    createController();
    $httpBackend.flush();
    expect($scope.data.groups).to.eql(mockGroups);
  });

  
});
