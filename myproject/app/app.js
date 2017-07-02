'use strict';

/**
 * @ngdoc overview
 * @name san
 * @description
 * # san
 *
 * Main module of the application.
 */
angular
  .module('san', [
    'ui.router',
    'ui.bootstrap',
    'san.route',
    'san.login',
    'san.home',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
