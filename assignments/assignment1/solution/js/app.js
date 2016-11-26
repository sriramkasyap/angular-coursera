(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items='';
    $scope.message='';
    $scope.checkIfTooMuch = function() {
      var stripItems = $scope.items.replace(/(^,)|(,$)/g, "")
      var allItems = stripItems.split(',');
      if (allItems.length > 3) {
        $scope.message = 'Too Much!';
      }
      else {
        $scope.message = 'Enjoy!';
      }
    };
  }
})();
