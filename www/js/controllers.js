angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, MySettings) {
  $scope.mySettings = MySettings.getSettings();
})

.controller('AccountCtrl', function($scope, MySettings) {
  $scope.mySettings = MySettings.getSettings();
  $scope.saveMySettings = function(mySettings){
    MySettings.setSettings(mySettings);
  };
});
