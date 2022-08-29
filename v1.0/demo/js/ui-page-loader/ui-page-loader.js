// Used imagesLoaded Plugin
// https://imagesloaded.desandro.com

// pageContainer - Set selector to waiting to load only part of page
// animation - animations's class name. Can be used classes from animate.css
// timeout - set timeout if your need


(function ( $ ) {

$.fn.uiPpageLoader = function( options , callback) {

//	----------------- Variables ------------------------
    var settings = $.extend({

//  Set Default Setting
            pageContainer: '.ui-page-loader',
            animation: 'fade-in',
            timeout: 0.0,

// Difine selector to waiting to load only part of page
// Or leave EMPTY to load FULL page
            objectToLoad: '',
            callback: '',

        }, options );



//  ---------------- Main Code ----------------------

   $(settings.pageContainer).after('<div class="ui-page-loader-icon"></div>');

// Waiting for FULL page content load
        if ( ! settings.objectToLoad ) {

            $(window).on("load", function (e) {
                mainFunctions();
            });
        }

//   Waiting for load content from defened selector
//   imagesLoaded js - https://imagesloaded.desandro.com
        else {

            $(settings.objectToLoad).imagesLoaded( { background: true }, function() {
                mainFunctions();
           });

        }


//  ---------------- Main Functions ----------------------

  function mainFunctions() {

      setTimeout(function () {

//  Add support animate.css
//  https://daneden.github.io/animate.css/

          $(settings.pageContainer).addClass('ui-page-loader-visible animated ' + settings.animation);
          $('.ui-page-loader-icon').remove();

          $(settings.pageContainer).one("animationend",
              function (event) {
// Remove animation from page container for fixing issue with z-index and CSS animations on internal element
// Replace(/\./g, '') - remove dot from pageContaine name
// Stop detecting animationend on children elements
                $(this).removeClass('ui-page-loader-visible animated ' + settings.pageContainer.replace(/\./g, '') + ' ' + settings.animation);
                }).children().on("animationend", function () {
                    return false; //you can just use event.stopPropagation()
                });

// Define Callback functionality
          var callback = settings.callback;
          if ($.isFunction(callback)) {
              callback.call();
          }

      }, (settings.timeout * 1000));
  }

};

}( jQuery ));
