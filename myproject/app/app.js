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
    'san.route',
    'san.login',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
