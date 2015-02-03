describe('AuthController', function () {
  var $scope, $rootScope, $location, $window, $httpBackend, createController, Auth;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('boundless'));
  beforeEach(inject(function($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
    $window = $injector.get('$window');
    $httpBackend = $injector.get('$httpBackend');
    Auth = $injector.get('Auth');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    // used to create our AuthController for testing
    createController = function () {
      return $controller('AuthController', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        Auth: Auth
      });
    };

    createController();
  })); 

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    $window.localStorage.removeItem('username');
  });

  it('should have a signup method', function() {
    expect($scope.signup).to.be.a('function');
  });

  it('should store username in localStorage after signup', function() {
    // create a fake username for auth
    $scope.user = {username: 'test', phone: 1234567890};

    $httpBackend.expectPOST('/api/users/').respond({});
    $scope.signup();
    $httpBackend.flush();
    expect($window.localStorage.getItem('username')).to.be($scope.user.username);
  });

  it('should have a signin method', function() {
    expect($scope.signin).to.be.a('function');
  });

});