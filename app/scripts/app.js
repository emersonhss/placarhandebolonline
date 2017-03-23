'use strict';

/**
 * @ngdoc overview
 * @name placarHandebolOnlineApp
 * @description
 * # placarHandebolOnlineApp
 *
 * Main module of the application.
 */
angular
  .module('placarHandebolOnlineApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
