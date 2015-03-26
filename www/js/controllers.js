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
    name: window.localStorage['name'] || 'John Smith',
    message: window.localStorage['message'] || 'This is my Default Checkin message.',
    emailTo: window.localStorage['emailTo'] || 'checkin@awesome.com',
    callTo: window.localStorage['callTo'] || '1234567890'
  };
  
  $scope.Store = function(){
	window.localStorage['name'] = $scope.mySettings.name;
	var userName = window.localStorage['name'];
	
	window.localStorage['message'] = $scope.mySettings.message;
	var userMessage = window.localStorage['message'];
	
	window.localStorage['emailTo'] = $scope.mySettings.emailTo;
	var ckemailTo = window.localStorage['emailTo'];
	
	window.localStorage['callTo'] = $scope.mySettings.callTo;
	var ckcallTo = window.localStorage['callTo'];
	
	alert("Information Saved"); 
  }
  
});
