(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items='';
    $scope.message='';
    $scope.checkIfTooMuch = function() {
      var stripItems = $scope.items.replace(/(^,)|(,$)/g, "");
      var stripItems = stripItems.replace(/(,,)|(,\s+,)/g,",");
      var allItems = stripItems.split(',');
     if (allItems.length > 3) {
       $scope.message = ' Too Much!';
       $scope.messageColor = 'green';
      }
      else if (!stripItems.trim()) {
        $scope.message = 'Please Enter Data First!';
        $scope.messageColor='red';
      }
      else {
        $scope.message = ' Enjoy! ';
        $scope.messageColor = 'green';
      }
    };
  }
})();
