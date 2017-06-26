'use strict';

/**
 * @ngdoc overview
 * @name san
 * @description
 * # san
 *
 * Main module of the application.
 */
angular.module('san.route', ['ui.router'])
.config(['$stateProvider',function($stateProvider) {
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
}]).run(['$state' ,function($state){
     $state.go('login');
   }
   ]);
