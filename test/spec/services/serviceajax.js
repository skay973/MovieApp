'use strict';

describe('Service: serviceAjax', function () {

  // load the service's module
  beforeEach(module('movieAppApp'));

  // instantiate service
  var serviceAjax;
  beforeEach(inject(function (_serviceAjax_) {
    serviceAjax = _serviceAjax_;
  }));

  it('should do something', function () {
    expect(!!serviceAjax).toBe(true);
  });

});
