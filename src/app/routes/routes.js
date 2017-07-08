(function(){
  'use strict'

  angular
    .module("conectasustentable")
    .config(config)

  function config($routeProvider){
    $routeProvider
      .when('/',{
        template: '<main-component></main-component>'
      })
      .otherwise({ redirectTo: '/' })
  }

})();
