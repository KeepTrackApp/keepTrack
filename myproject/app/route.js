'use strict';

/**
 * @ngdoc overview
 * @name san
 * @description
 * # san
 *
 * Main module of the application.
 */
angular.module('san.route', [])
.config(['$stateProvider',function($stateProvider) {
  function initMainStateView() {
                var viewObj = {
                    'header': {
                      templateUrl : 'views/header.html'
                    }
                };
                return viewObj;
  }
  $stateProvider.state('main', {
     url : '/home-view',
     views: initMainStateView()
     }
).state('main.home', {
     url : '/main',
     views :
     {
       'content@' : {
         templateUrl : 'home/main.html',
        controller: 'HomeCtrl',
        controllerAs: 'main'
       }
     }
}).state('main.login', {
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
     $state.go('main.login');
     }
   ]);
