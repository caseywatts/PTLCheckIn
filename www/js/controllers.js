angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

// .controller('ChatsCtrl', function($scope, Chats) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   }
// })
//
// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

.controller('AccountCtrl', function($scope) {
  $scope.mySettings = {
    name: 'Casey Watts',
    message: 'I am safe',
    emailTo: 'derek.gildea+caseysafe@gmail.com',
    callTo: '123-456-7890'
  };
});
