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

<h4>Подключите класс .ui-page-loader к body либо другому селектору </h4>

<body class="ui-page-loader">

<h4>Преременные:</h4>

<p><b>pageContainer:</b> - указывает на контейнер страницы</p>
<p><b>animation:</b> - задаем еффект анимации при появлении страницы. По умолчанию доступно три: fade-in; zoom-in; zoom-out;
Либо укажите свои (к примеру из библиотеки animate..css) </p>
<p><b>timeout:</b> - задаем дополнительный timeout в секундах</p>
<p><b>objectToLoad:</b> - задаем елемент страницы, после загрузки которого отобразится страница. Ожидается загрузка самого элемента и всех его изображений в том числе и фоновых. Удобно использовать для ожидания загрузки Sliders. <br />
Для загрузки всей страницы оставте ее пустой.
</p>
<p><b>callback:</b> - Вызываем свою фунуцию после загрузки страницы. Например инициализируем слайдер </p>
```
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





Примерный код глобального тега выглядит так:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116704025-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-116704025-1');
</script>
```




<h4>Video Player Example HTML code structure:</h4>

```html
 <div class="col-12 col-lg-6 videos">
     <a class="play_btn play_video" data-video-source="#video_1" href="#"></a>
     <video id="video_1" title="video 1" preload="none" poster="images/poster-1.jpg">
         <source src="video/1.mp4" type="video/mp4">
     </video>
     <h4>Video 1</h4>
 </div>
```

Set in <b>data-video-source</b> id of video to be played.


