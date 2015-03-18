'use strict';

/**
 * @ngdoc service
 * @name movieAppApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the movieAppApp.
 */
angular.module('movieAppApp')
  .factory('serviceAjax', function ($http) {
    // Service logic

    // Public API here
    return {
      info: function(id){
        return $http.get('http://localhost:3000/info/' + id);
      },
      search: function(query, page){
        return $http.get('http://localhost:3000/search?q=' + query + '&page=' + page);
      },
      popular: function(page){
        return $http.get('http://localhost:3000/popular?page=' + page);
      }
    };
  });
