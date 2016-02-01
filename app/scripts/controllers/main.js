'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.busca = function(){

  		if($scope.busqueda==undefined || $scope.busqueda=='' ) {
  			alert('escribe algo');
  		}
  		else {
  			alert($scope.busqueda);
  		}
  		
  	}

  });
