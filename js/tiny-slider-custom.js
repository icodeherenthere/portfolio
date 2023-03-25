   var slider = tns({
    container: '.my-slider',
    items: 3,
    responsive: {
         0:{
             items:1
         },
         768:{
             items:2
         },
         1200:{
             items:3
         }
    },
    slideBy: 'page',
    autoHeight: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 5000,
    autoplay: true
   });