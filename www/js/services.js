angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Casey Watts',
    message: 'I am safe',
    emailTo: 'derek.gildea+caseysafe@gmail.com'
  }, {
    id: 1,
    name: 'Kevin Zhang',
    message: 'I am derping',
    emailTo: 'derek.gildea+kevin@gmail.com'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Settings', function() {
  var settings = {lol: "yes"};
});
