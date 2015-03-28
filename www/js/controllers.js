angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, MySettings) {
  $scope.mySettings = MySettings.all;
})

.controller('SettingsCtrl', function($scope, MySettings) {
  $scope.mySettings = MySettings.all;
});
