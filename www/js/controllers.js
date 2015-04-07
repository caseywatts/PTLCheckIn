angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localStorage) {
//    $scope.mySettings = MySettings.getSettings();
  $scope.$storage = $localStorage;
})

.controller('AccountCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;
//   $scope.mySettings = MySettings.getSettings();
//   $scope.saveMySettings = function(mySettings){
//     MySettings.setSettings(mySettings);
//   };
});
