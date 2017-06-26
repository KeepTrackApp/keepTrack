'use strict';

/**
 * @ngdoc function
 * @name san.controller:LoginCtrl
 * @description
 * # MainCtrl
 * Controller of the san
 */

angular.module('san').controller('LoginCtrl' , ['$state','$scope', function($state,$scope){
  $scope.userName = '';
  $scope.password = '';
  $scope.signIn = function()
  {
    if($scope.userName === "santosh" && $scope.password === "santosh045")
    {

       $state.go("main");
    }
  };
}]);
