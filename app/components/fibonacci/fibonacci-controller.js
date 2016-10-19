'use strict';

/**
 * @ngdoc controller
 * @name geekTimeApp.controller: FibonacciCtrl
 * @description
 * # FibonacciCtrl
 * Fibonacci Controller of the geekTimeApp
 */
angular.module('geekTimeApp')
  .controller('FibonacciCtrl', ['$scope', '$q', '$timeout', 'FibonacciService', '$log',
    function($scope, $q, $timeout, FibonacciService, $log) {
      /*
       FIXME don't use $scope for binding anymore, use controllerAs (bind to
       this) instead. The old bindings on $scope should be migrated to this.
       */
      $scope.number = { value : 0 };
      $scope.result = {};

      $scope.$watch('number.value', function(newValue, oldValue) {

        function success(response) {
          $log.log('successfully');
          $scope.result = response;
        }
        function error(response) {
          $log.error('Error', response);
        }
        $log.log('The value <' + oldValue + '> is changed to <' + newValue + '>');
        if (newValue !== undefined) {
        FibonacciService.getResult(newValue).then(success, error);        }

      });
    },
  ]);
