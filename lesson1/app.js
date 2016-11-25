(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Sriram Kasyap";
  $scope.sayMessage = function () {
    return "Sriram Kasyap likes to eat, sleep and code!!";
  }
}

})();
