angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, MySettings, $localStorage) {
//    $scope.mySettings = MySettings.getSettings();
  $scope.$storage = $localStorage;
})

.controller('AccountCtrl', function($scope, MySettings, $localStorage) {
  $scope.$storage = $localStorage;
//   $scope.mySettings = MySettings.getSettings();
//   $scope.saveMySettings = function(mySettings){
//     MySettings.setSettings(mySettings);
//   };
});
