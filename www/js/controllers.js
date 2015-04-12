angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localStorage, CheckInMessages) {
  $scope.$storage = $localStorage;
  if ($scope.$storage.messages === undefined)
    {
      $scope.$storage.messages = CheckInMessages.all();
    }
  $scope.newMessage = function() {
    $scope.$storage.messages.push({message: "Hello!", subject: "Subject"});
  };
  $scope.deleteMessage = function(index) {
    $scope.$storage.messages.splice(index,1);
  };
})

.controller('AccountCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;
});
