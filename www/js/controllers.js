angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, localStorageService, MySettings) {
  localStorageService.bind($scope, 'mySettings');
})

.controller('AccountCtrl', function($scope, localStorageService, MySettings) {
  localStorageService.bind($scope, 'mySettings');
});
