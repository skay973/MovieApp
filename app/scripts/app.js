'use strict';

/**
 * @ngdoc overview
 * @name movieAppApp
 * @description
 * # movieAppApp
 *
 * Main module of the application.
 */
angular
  .module('movieAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl'
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });
