(function(){
  'use strict'

  var mainComponent = {
    controller: mainCtrl,
    templateUrl: 'app/components/main/main.html'
  }

  angular
    .module("Practica")
    .component("mainComponent", mainComponent)

  function mainCtrl(){

    var mainC = this;
}
})();
