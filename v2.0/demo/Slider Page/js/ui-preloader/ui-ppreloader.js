// Used imagesLoaded Plugin
// https://imagesloaded.desandro.com

// fadeOutDuration - Set fade Out duration to apear page content in ms
// objectToLoad: - Set selector to waiting to load only part of page
// timeout - set additition timeout if your need


(function ( $ ) {

$.fn.uiPreloader = function( options , callback) {

//	----------------- Variables ------------------------
    var settings = $.extend({

//  Set fade Out duration to apear page content in ms
            fadeOutDuration: 200,
//  Set additition timeout after page loaded
            timeout: 0.0,

// Difine selector to waiting to load only part of page
// Or leave EMPTY to load FULL page
            objectToLoad: '',
            callback: '',

        }, options );



//  ---------------- Main Code ----------------------

//    $(settings.pageContainer).after('<div class="ui-page-loader-icon"></div>');

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


        $('.ui-preloader-icon').fadeOut( 200 );
        $('.ui-preloader').fadeOut( settings.fadeOutDuration );

        // Define Callback functionality
        var callback = settings.callback;
        if ($.isFunction(callback)) {
            callback.call();
        }

      }, (settings.timeout * 1000));
  }

};

}( jQuery ));
