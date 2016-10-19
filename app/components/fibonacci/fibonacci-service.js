'use strict';

/**
 *
 * @name geekTimeApp.service : FibonacciService
 * @description
 * # FibonacciService
 * A service that encapsulates the logic.
 */

angular.module('geekTimeApp')
    .factory('FibonacciService', ['$q', function($q) {

      function fibonacci(num, memo) {
        memo = memo || {};
        if (memo[num]) {
          return memo[num];
        }
        if (num <= 1) {
          return 1;
        }
        return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
      }

      function getResult(n) {
        var deferred = $q.defer();
        var r =  fibonacci(n, {});
        deferred.resolve('f(' + n + ') = ' + r);
        return deferred.promise;
      }

      return {
          /**
           * @ngdoc method
           * @name getResult
           * @methodOf geekTimeApp.fibonacci.FibonacciService
           * @description
           * Retrieves
           *
           * @param {number} idx
           */
          getResult: getResult
        };
    },
  ]);
