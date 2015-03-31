angular.module('ionic.utils', [])
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key, defaultValue) {
      return JSON.parse($window.localStorage[key] || JSON.stringify(defaultValue));
    }
  };
}]);

angular.module('starter.services', [])
.service('MySettings', ['$localstorage', function($localstorage) {
  var mySettings;
  var defaultSettings = {
      name: 'Casey Watts',
      message: 'lol',
      emailTo: 'derek.gildea+caseysafe@gmail.com',
      callTo: '123-456-7890'
  };
  this.getSettings = function() {
    return $localstorage.getObject('mySettings', defaultSettings);
  };
  this.setSettings = function(mySettings) {
    return $localstorage.setObject('mySettings', mySettings);
  };
}]);
