'use strict';

describe('Service: serviceAjax', function () {

  // load the service's module
  beforeEach(module('movieAppApp'));

  // instantiate service
  var serviceAjax,
    httpBackend;

  beforeEach(inject(function (_serviceAjax_, _$httpBackend_) {
    serviceAjax = _serviceAjax_;
    httpBackend = _$httpBackend_;
  }));

  it('should make a request to the right URL when calling moviesInfo function', function () {
    serviceAjax.info('movies', 2254321);

    httpBackend.expectGET('http://localhost:3000/movies/info/2254321').respond({});

    httpBackend.flush();
  });

  it('should make a request to the right URL when callling moviesPopular function', function () {
    serviceAjax.popular('movies', 1);

    httpBackend.expectGET('http://localhost:3000/movies/popular?page=1').respond({});

    httpBackend.flush();
  });

  it('should make a request to the right URL when callling moviesSearch function', function () {
    serviceAjax.search('movies', 'test', 1);

    httpBackend.expectGET('http://localhost:3000/movies/search?q=test&page=1').respond({});

    httpBackend.flush();
  });

  it('should make a request to the right URL when calling tvsInfo function', function () {

    serviceAjax.info('tvs', 2254321);

    httpBackend.expectGET('http://localhost:3000/tvs/info/2254321').respond({});

    httpBackend.flush();
  });

  it('should make a request to the right URL when callling tvsPopular function', function () {
    serviceAjax.popular('tvs', 1);

    httpBackend.expectGET('http://localhost:3000/tvs/popular?page=1').respond({});

    httpBackend.flush();
  });

  it('should make a request to the right URL when callling tvsSearch function', function () {
    serviceAjax.search('tvs', 'test', 1);

    httpBackend.expectGET('http://localhost:3000/tvs/search?q=test&page=1').respond({});

    httpBackend.flush();
  });

});
