(function ($) {

  $().uiPreloader(
    {
      //  Set fade Out duration to apear page content in ms
      fadeOutDuration: 350,
      // Set additition timeout after page loaded
      timeout: 1.0,

      // Set selector to waiting to load only part of page
      // Or leave EMPTY to load FULL page
      objectToLoad: '.loaded-content',

      callback: function(){

        var sliderInit = $('.main-slider');

        sliderInit.slick({
            autoplay: true,
//                  speed: 0000,
            autoplaySpeed: 7900,
//                  fade: true,
            arrows: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            draggable: false,
            swipe: false,
            dots: true
        });

            sliderInit.slickAnimation();

        }

    }
  );


  
}(jQuery));