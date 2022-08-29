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

//  *****  Add CallBack code here 
//  *****  For examle code belowe:

        // $('.hero-styler').addClass('rise-in-start');
        // $('.toolbar').addClass('rise-down-start');
        // $('.hero').addClass('rise-in-up-start');

        // $('.hero-slider').slick({
        //   autoplay: true,
        //   autoplaySpeed: 7000,
        //   speed: 1000,
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        //   arrows: false,
        //   fade: true,
        //   pauseOnFocus: false,
        //   pauseOnHover: false,
        // });


      }
    }
  );
  
}(jQuery));