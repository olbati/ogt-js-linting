'use strict';

/**
 * @ngdoc overview
 * @name geekTimeApp
 * @description
 * # geekTimeApp
 *
 * Main module of the application.
 */
angular
  .module('geekTimeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/fibonacci/fibonacci.html',
        controller: 'FibonacciCtrl',
        controllerAs: 'fibonacci'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
