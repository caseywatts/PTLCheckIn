angular.module('starter.services', [])

.service('MySettings', function() {
  this.all = {
    name: 'Casey Watts',
    message: 'lol',
    emailTo: 'derek.gildea+caseysafe@gmail.com',
    callTo: '123-456-7890'
  };
});
