angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localStorage, CheckInMessages) {
  $scope.$storage = $localStorage;
  if ($scope.$storage.message === null)
    {
      $scope.$storage.messages = CheckInMessages.all();
    }
  $scope.newMessage = function() {
    $scope.$storage.messages.push({message: "[text]"});
  };
  $scope.deleteMessage = function(index) {
    $scope.$storage.messages.splice(index,1);
  };
})

.controller('AccountCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;
});
