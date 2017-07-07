(function(){
  'use strict'

  angular
    .module("conectasustentable")
    .config(config)

  function config($routeProvider){
    $routeProvider
      .when('/sugerencias',{
        template: '<componente-inicio></componente-inicio>'
      })
      .when('/',{
        template: '<main-component></main-component>'
      })
      .when('/pate',{
        template: '<pate-component></pate-component>'
      })
      .otherwise({ redirectTo: '/' })
  }

})();
