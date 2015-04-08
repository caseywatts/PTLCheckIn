angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localStorage, CheckInMessages) {
  $scope.$storage = $localStorage;
  if ($scope.$storage.message === null)
    {
      $scope.$storage.messages = CheckInMessages.all();
    }
})

.controller('AccountCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;
});
