'use strict';

describe('Directive: revolutionSlider', function () {

  // load the directive's module
  beforeEach(module('movieAppApp'));

  beforeEach(module('partials/revolution-slider-directive.html'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should create basic structure of the slider', inject(function($compile) {
    scope.slider = [];
    element = angular.element('<revolution-slider info="slider"></revolution-slider>');
    element = $compile(element)(scope);
    scope.$digest();

    var sliderContainer = angular.element(element.find('div')[0]);
    expect(sliderContainer.hasClass('banner-container')).toBe(true);

    sliderContainer = angular.element(element.find('div')[1]);
    expect(sliderContainer.hasClass('banner')).toBe(true);

    var slidesList = angular.element(element.find('ul:nth-of-type(1) li'));
    expect(slidesList.length).toEqual(0);
  }));

  it('should create one slide for each object in the $scope.slider array', inject(function($compile) {
    scope.slider = [{}, {}];
    element = angular.element('<revolution-slider info="slider"></revolution-slider>');
    element = $compile(element)(scope);
    scope.$digest();

    var slidesList = angular.element(element.find('ul:nth-of-type(1) li'));
    expect(slidesList.length).toEqual(2);
  }));

  it('should create one <img> per slide, containing the slide\'s background image', inject(function($compile) {
    scope.slider = [{}];
    element = angular.element('<revolution-slider info="slider"></revolution-slider>');
    element = $compile(element)(scope);
    scope.$digest();

    var slideImage = angular.element(element.find('li > img'));
    expect(slideImage.length).toEqual(1);
  }));

  it('should create one <div> per slide, containing the slide\'s data', inject(function($compile) {
    scope.slider = [{ layers: [{}, {}, {}] }];
    element = angular.element('<revolution-slider info="slider"></revolution-slider>');
    element = $compile(element)(scope);
    scope.$digest();

    var slideData = angular.element(element.find('li > div'));
    expect(slideData.length).toEqual(3);
  }));
});
