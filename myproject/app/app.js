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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
  ])
  .config(['$stateProvider',
   function($stateProvider) {
     $stateProvider.state('main', {
     url : '/main',
     views :
     {
       'content@' : {
         templateUrl : 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
       }
     }
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'login/login.html',
  //       controller: 'LoginCtrl',
  //       controllerAs: 'login'
  //     })
  //     .when('/main', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
}).state('login', {
url : '/',
views :
{
  'content@':
  {
     templateUrl : 'login/login.html',
  }
}
});
   }]).
   run(['$state' ,function($state){
     $state.go('login');
   }

   ]);
