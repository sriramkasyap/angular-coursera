<<<<<<< HEAD
(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Sriram Kasyap";
  $scope.sayMessage = function () {
    return "Sriram Kasyap likes to eat, sleep and code!!";
  };
  $scope.currentState = 'hungry';
  $scope.feedMe = function () {
    $scope.currentState = 'fed';
  };
}

})();
=======
!function(){"use strict";function e(e,n){e.name="Yaakov",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",e])}();
>>>>>>> angularjs
