angular.module('services', [])
.factory('CheckInMessages', [function() {
  return {
    all: function(){
      return [
        {message: "hello!"},
        {message: "goodbye..."}
      ];
    }
  };
}]);
