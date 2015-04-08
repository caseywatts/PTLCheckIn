angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localStorage, CheckInMessages) {
//    $scope.mySettings = MySettings.getSettings();
  $scope.$storage = $localStorage;
  $scope.$storage.messages = CheckInMessages.all();
})

.controller('AccountCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;
//   $scope.mySettings = MySettings.getSettings();
//   $scope.saveMySettings = function(mySettings){
//     MySettings.setSettings(mySettings);
//   };
});
