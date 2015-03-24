'use strict';

describe('Controller: InfoCtrl', function () {

  // load the controller's module
  beforeEach(module('movieAppApp'));

  var InfoCtrl,
    scope, serviceAjax;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _serviceAjax_) {
    scope = $rootScope.$new();
    serviceAjax = _serviceAjax_;
    InfoCtrl = $controller('InfoCtrl', {
      $scope: scope,
      serviceAjax: serviceAjax
    });
  }));

  it('should set $scope.data when calling $scope.info with \'movies\' query parameter', function () {
    scope.query.type = 'movies';

    spyOn(serviceAjax, 'info').and.callFake(function () {
      return {
        success: function (callback) {
          callback({'title' : 'test'});
        }
      };
    });

    scope.info();

    expect(scope.data).toEqual({'title' : 'test'});
  });

  it('should set $scope.movie when calling $scope.movieInfo with \'tvs\' query parameter', function () {
    scope.query.type = 'tvs';

    spyOn(serviceAjax, 'info').and.callFake(function () {
      return {
        success: function (callback) {
          callback({'title' : 'test'});
        }
      };
    });

    scope.info();

    expect(scope.data).toEqual({'title' : 'test'});
  });


});
