$(document) .ready(function() {
   /*Sidebar Menu*/
   "use strict";

   $(".preloader-wrap").delay(1500).fadeOut('slow');

   Revealator.effects_padding = '-200';

   /*Navigation*/
   $(function() {
   $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  /*Magnific Popup*/
   $(function() {
    $('div.item-wrap').magnificPopup({delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
   });

   
   $(function() {
    $('.selector').animatedHeadline();
   })

}); 
});

