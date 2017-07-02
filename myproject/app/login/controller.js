'use strict';

/**
 * @ngdoc function
 * @name san.controller:LoginCtrl
 * @description
 * # MainCtrl
 * Controller of the san
 */

angular.module('san.login',[]).controller('LoginCtrl' , ['$state','$scope','$rootScope', function($state,$scope, $rootScope){
  $scope.userName = 'santosh';
  $scope.password = 'santosh045';
  $scope.signIn = function()
  {
    if($scope.userName === "santosh" && $scope.password === "santosh045")
    {
       $rootScope.userName = $scope.userName;
       $rootScope.password = $scope.password;
       $state.go("main.home");
    }
  };
}]);
