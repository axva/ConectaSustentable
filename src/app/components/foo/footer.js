(function(){
  'use strict'

  var footer = {
    controller: footerCtrl,
    templateUrl: "app/components/footer/footer.html"
  }

  angular
    .module("Practica")
    .component("customFooter", footer)

  function footerCtrl(){

    var foo = this;


  }
})()
