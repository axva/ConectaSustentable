(function(){
  'use strict'

  angular
    .module("conectasustentable")
    .config(config)

  function config($routeProvider){
    $routeProvider
      .when('/',{
        template: '<componente-inicio></componente-inicio>'
      })
      .when('/',{
        template: '<main-component></main-component>'
      })
      .when('/',{
        template: '<pate-component></pate-component>'
      })
      .otherwise({ redirectTo: '/' })
  }

})();
