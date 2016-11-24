(function () {
'use strict';

angular.module('NameCalculator', [])

  .controller('NameController', function ($scope) {
    $scope.name='';
    $scope.value = 0;
    $scope.sayHello=function(textInput) {
      return "Hello " + textInput + "!!";
    };
    $scope.displayNumeric = function() {
      var totalNameValue = calculateNumericOutput($scope.name);
      $scope.value=totalNameValue;
    };

    function calculateNumericOutput(stringInput) {
      var totalStringValue = 0;
      for (var i = 0; i < stringInput.length; i++) {
        totalStringValue +=  stringInput.charCodeAt(i);
      }

      return totalStringValue;
    }
  });

})();
