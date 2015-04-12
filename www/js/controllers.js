angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localStorage, CheckInMessages) {
  $scope.$storage = $localStorage;
  if ($scope.$storage.messages === undefined)
    {
      $scope.$storage.messages = CheckInMessages.all();
    }
  $scope.newMessage = function() {
    $scope.$storage.messages.unshift({message: "Hello!", subject: "Subject"});
  };
  $scope.listCanSwipe = true;
  $scope.reorderMessage = function(item, fromIndex, toIndex) {
    //Move the item in the array
    $scope.$storage.messages.splice(fromIndex, 1);
    $scope.$storage.messages.splice(toIndex, 0, item);
  };
})

.controller('AccountCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;
});
