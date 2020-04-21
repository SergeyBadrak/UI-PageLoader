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
<link href="js/ui-page-loader/ui-page-loader.css" rel="stylesheet" type="text/css">
```
2. Add jQuery library
```HTML 
 <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
 ``` 
 
3. Add JS after jQuery
```HTML 
<script src="js/ui-page-loader/ui-page-loader.js"></script>
```  
4. Initialise script
```JS 
<script type="text/javascript">

    $().uiPpageLoader(
        {
// Set slector to show/hide page content
            pageContainer: '.ui-page-loader',
            animation: 'fade-in',
            timeout: 0.0,

// Set selector to waiting to load only part of page
// Or leave EMPTY to load FULL page
            objectToLoad: '',
            callback: ""
        }
    );

    </script>
  ``` 
<p></p>

<h2>How to use</h2>

<h4>Ыуе the .ui-page-loader class to body or another selector </h4>
```HTML
<body class="ui-page-loader">
```
<h4>Преременные:</h4>

<p><b>pageContainer:</b> - set the page container</p>
<p><b>animation:</b> - set the effect of the animation when the page appears. Three are available by default: fade-in; zoom-in; zoom-out;
Or specify your own (for example, from the animate..css library) </p>
<p><b>timeout:</b> - set the additional timeout in seconds</p>
<p><b>objectToLoad:</b> - set the page element, after loading which the page will be displayed. It is awaiting to load the element itself and all its images, including background ones. It is convenient to use to wait for the loading of Sliders.<br />
Для загрузки всей страницы оставте ее пустой.
</p>
<p><b>callback:</b> - Call your function after loading the page. For example, initialize the slider </p>

```JS
<script type="text/javascript">

        $().uiPpageLoader(
            {
                pageContainer: '.ui-page-loader',
                animation: 'fade-in',
                timeout: 0.0,
                objectToLoad: '.main-slider',

                callback: function(){
                     $('.main-slider').slick({   
                });
                    }
            }
        );

    </script>
```     


