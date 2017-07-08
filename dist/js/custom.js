// navbar color
$(window).scroll(function() {
   if ($("#menu").offset().top > 100) {
       $("#menu").addClass("nav-color");
       $("#menu").removeClass("nav-transparente");
   } else {
       $("#menu").addClass("nav-transparente");
       $("#menu").removeClass("nav-color");

   }
 });
