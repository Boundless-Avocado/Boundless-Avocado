describe('Routing', function () {
  var $route;
  beforeEach(module('boundless'));

  beforeEach(inject(function($injector){
    $route = $injector.get('$route');
  }));

  it('Should have /signup route, template, and controller', function () {
    expect($route.routes['/signup']).to.be.ok();
    expect($route.routes['/signup'].controller).to.be('AuthController');
    expect($route.routes['/signup'].templateUrl).to.be('client/app/auth/signup.html');
  });

  it('Should have /signin route, template, and controller', function () {
    expect($route.routes['/signin']).to.be.ok();
    expect($route.routes['/signin'].controller).to.be('AuthController');
    expect($route.routes['/signin'].templateUrl).to.be('client/app/auth/signin.html');
  });

  it('Should have /groups route, template, and controller', function () {
    expect($route.routes['/groups']).to.be.ok();
    expect($route.routes['/groups'].controller).to.be('GroupsController');
    expect($route.routes['/groups'].templateUrl).to.be('client/app/groups/groups.html');
  });

});

