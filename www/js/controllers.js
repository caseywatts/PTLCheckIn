angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, MySettings) {
  $scope.mySettings = MySettings.all;
})

.controller('AccountCtrl', function($scope, MySettings) {
  $scope.mySettings = MySettings.all;
});
