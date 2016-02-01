'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function ($scope) {

  		$scope.colores = [];
  		$scope.titulo = 'Simón';
  		$scope.acumuladorV = 0;
  		$scope.acumuladorR = 0;
  		$scope.acumuladorM = 0;
  		$scope.acumuladorA = 0;


  		$scope.play = function(color){
  			switch(color){
  				case 'verde':
  					$scope.acumuladorV = $scope.acumuladorV + 1;
  					break;
  				case 'rojo':
  					$scope.acumuladorR = $scope.acumuladorR + 1;
  					break;
  				case 'amarillo':
  					$scope.acumuladorM = $scope.acumuladorM + 1;
  					break;
  				case 'azul':
  					$scope.acumuladorA = $scope.acumuladorA + 1;
  					break;
  			}

  			$scope.colores.push(color);
  		}

  		$scope.borrar = function(){
  			$scope.colores = [];
  		} 

  		$scope.busca = function(){
  			alert($scope.busqueda);
  		}  		
  });
