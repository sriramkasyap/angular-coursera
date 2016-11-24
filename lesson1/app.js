(function () {
'use strict';

angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope) {
    $scope.name = 'Sriram Kasyap';
    $scope.sayHello = function(name) {
      return "Hello " + name "!!";
    };
  });

})();
