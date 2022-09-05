# UI-PageLoader
Show HTML content after page (or part of page) loaded


<h4>Demo</h4> 
https://artium.com.ua/projects/UI-PageLoader/demo/


<h2>Requirements: </h2>
<ul>
<li>jQuery library</li>
<li>imagesLoaded Plugin  https://imagesloaded.desandro.com</li>
<li>Optional: Slick Slider and Slick-Animation</li>
</ul>


<h2>Installation</h2>

1. Add CSS style in head
```HTML 
<link href="js/ui-preloader/ui-ppreloader.css" rel="stylesheet" type="text/css">
```
2. Add jQuery library
```HTML 
 <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
 ``` 
 
3. Add JS after jQuery
```HTML 
<script src="js/ui-preloader/ui-preloader.js"></script>
<script src="js/ui-preloader/ui-preloader-init.js"></script>
```  
4. Insert Preloader code on the top of the page
```HTML 
<!-- Preloader code part -->
<div class="ui-preloader">
    <div class="ui-preloader-icon"></div>
</div>
```   
<p></p>

<h2>How to use</h2>



<p><b>fadeOutDuration:</b> - Set fade Out duration to apear page content in ms</p>
<p><b>timeout:</b> - Set additition timeout after page is loaded in seconds</p>
<p><b>objectToLoad:</b> - set the page element, after loading which the page will be displayed. It is awaiting to load the element itself and all its images, including background ones. It is convenient to use to wait for the loading of Sliders.<br />
Leave empty to load the entire page.
</p>
<p><b>callback:</b> - Call your function after loading the page. For example, initialize the slider </p>

<h3>Example of simple init file:</h3>

```JS
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
      }
    }
  );
  
}(jQuery));

``` 
<h3>Example of full init file:</h3>

```JS
(function ($) {

  $().uiPreloader(
    {
      //  Set fade Out duration to apear page content in ms
      fadeOutDuration: 350,
      // Set additition timeout after page loaded
      timeout: 1.0,

      // Set selector to waiting to load only part of page
      // Or leave EMPTY to load FULL page
      objectToLoad: '.main-slider',

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
```     


