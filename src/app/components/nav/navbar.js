(function(){
  'use strict'

  var navBar = {
    controller: navCtrl,
    templateUrl: "app/components/nav/navbar.html"
  }

  angular
    .module("conectasustentable")
    .component("navbarComponent", navBar)

    function navCtrl(){
      var nav = this;
    }

})()
