<<<<<<< HEAD
<<<<<<< HEAD
var student = {
  name: "",
  type: "student"
};
document.addEventListener('DOMContentLoaded', contentLoaded);
function contentLoaded(event) {
  document.getElementById('myname').addEventListener("keyup", keyUp);
}
function keyUp(event) {
  calculateNumericOutput();
}
function calculateNumericOutput() {
  student.name = document.getElementById('myname').value;
  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i);
  }
  // Insert result into page
  var output = "Total Numeric value of input value is " + totalNameValue;
  document.getElementById('output').innerText = output;
}
=======
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
>>>>>>> expressions
=======
!function(){"use strict";function e(e,n){e.name="Yaakov",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",e])}();
>>>>>>> angularjs
