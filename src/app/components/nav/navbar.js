(function(){
  'use strict'

  var navBar = {
    controller: navCtrl,
    templateUrl: "app/components/nav/navbar.html"
  }

  angular
    .module("Practica")
    .component("navBar", navBar)

    function navCtrl(){
      var nav = this;
    }

})()
