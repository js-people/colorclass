# [ColorClass](http://ColorClass.ir)
-----------
Follow the steps below:
- Download ZIP file from GitHub.
- Copy one of js files from upload folder into your javascripts folder (Choose one of files).
- Patch the file in your HTML code.

```
<script type="text/javascript" src="js/colorclass-v.js"></script>
or
<script type="text/javascript" src="js/colorclass-v.min.js"></script>
```

- Your page is ready and you can see the usage instruction:


## How to use ColorClass
ColorClass controls the text color, the background color and the background opacity only by set a class.

### Text color:
- Add a class like: **t#5b8930** into your tag, without any CSS code. Example:

```
<div class="t#19b5fe">it is a div with blue text</div>
<p class="t#dc3023">it is a paragraph with red text</p>
<i class="fa fa-check t#5b8930"></i> it is a green font-icon
```

### Background color:
- Add a class like **b#19b5fe** into your tag, without any CSS code. Example:

```
<div class="col-md-12 b#19b5fe">it is a div with blue background</div>
<span class="b#dc3023">it is a span with red background</span>
<table class="b#5b8930">it is a table with green background</table> 
```

### Text opacity:
- Add a class like **t%50** or **t%5** into your tag, without any CSS code. Example:

```
<div class="col-md-12 #19b5fe t%5">it is a div with blue text and 0.5 text opacity</div>
<span class="#dc3023 t%35">it is a span with red text and 0.35 text opacity</span>
<table class="t%90">it is a table with css text and 0.9 text opacity</table> 
```

### Background opacity:
- Add a class like **b%50** or **b%5** into your tag, without any CSS code. Example:

```
<div class="col-md-12 #19b5fe b%5">it is a div with blue background and 0.5 opacity</div>
<span class="#dc3023 b%35">it is a span with red background and 0.35 opacity</span>
<table class="b%90">it is a table with css background and 0.9 opacity</table> 
```
Note: In this case, just the background Alpha would be changed and the entire contents of the box would be with one hundred percent clearly displayed.


### Background image opacity:
- Add a class like **i%50** or **i%5** into your tag, without any CSS code. Example:

```
<div class="col-md-12 i%5">it is a DIV with image background and 0.5 opacity</div>
<span class="b#dc3023 i%35">it is a span with image background and 0.35 opacity</span>
<table class="i%90">it is a table with image background and 0.9 opacity</table> 
```
Note: In this case, just the background image would be changed and the entire contents of the box would be with one hundred percent clearly displayed.


### Hover:
- For text hover or background color hover hover, add a = after the color code and then add the hove color code (Example: **b#000=fff**)

```
<div class="col-md-12 b#000=fff">it is a DIV with black background and wite background on hover</div>
<span class="t#cf000f=19b5fe">it is a span with red text and blue text on hover</span>
<table class="b%90=7">it is a table with 0.9 background opacity and 0.7 background opacity on hover</table> 
<section class="t%4=67">it is a section with 0.4 text opacity and 0.67 text opacity on hover</section>
<body class="i%6=9">it is a page with 0.6 background image opacity and 0.9 background image opacity on hover</body>
```


## Specifications:
```
  1--- Class, Reading all "class" tags (Example: <div class=""></div> )
  2--- Function, "cc_fColorClass(15)" resets all of the cchtml text colors, opacities and hovers,
                                      resets all of the cchtml background colors, opacities and hovers,
                                      resets all of the cchtml background images color filters, opacities and hovers.
                 "cc_fColorClass(2)"  resets all of the cchtml text colors and opacities.
                 "cc_fColorClass(4)"  resets all of the cchtml background colors and opacities.
                 "cc_fColorClass(6)"  resets all of the cchtml text and backgrounds colors and opacities.
  3--- Color, Text color t#[xxxxxx] or t#[xxx] (Example: <div class="t#f1b2af"></div>, t#f0f )
  4--- Color, BackGround color b#[xxxxxx] or b#[xxx] (Example: b#ff00ff, b#f0f )

 v 1.1
  5--- Opacity, BackGround opacity b%[xx] or b%[x] (Example: b%35 , b%05 , b%4 [or b%40] )

 v 1.2
   6--- Opacity, Text opacity t%[xx] or t%[x] (Example: t%35 , t%05 , t%4 [or t%40] )
   7--- Hover, Text color hover t#[xxx]=[xxx] or t#[xxxxxx]=[xxxxxx] (Example: t#f0f=0f0 , t#ff00ff=00ff00 )
   8--- Hover, Text opacity hover t%[xx]=[xx] or t%[x]=[x] (Example: t%15=9 , t%5=100 [or t%5= ] )
   9--- Hover, BackGround color hover b#[xxx]=[xxx] or b#[xxxxxx]=[xxxxxx] (Example: b#f0f=0f0 , b#ff00ff=00ff00 )
   10-- Hover, BackGround opacity hover b%[xx]=[xx] or b%[x]=[x] (Example: b%15=9 , b%5=100 [or b%5= ] )
 
 v 1.3.0
   11-- Improve, IE9+ and Chrome
 
 v 1.3.1
   12-- Transition, Auto transition (all 0.3s)
 
 v 1.4 (*New Protocol: "#"=>"b#" , "%"=>"b%" , "@"=>"t#" , "!"=>"t%" )
   13-- Opacity, background image opacity i%[xx] or  (Example: i%35 , i%05 , i%4 [or i%40] )
   14-- Filter, background image color filter i%[x] and [ b#[xxxxxx] or b#[xxx] ] (Example: i%1 b#ff00ff, i%5 b#f0f )
   15-- Hover, background image hover i%[xx]=[xx] or i%[x]=[x] (Example: i%15=9 , i%5=100 [or i%5= ] )
   16-- Hover, background image color filter hover i%[x] and [ b#[xxx]=[xxx] or b#[xxxxxx]=[xxxxxx] ] (Example: i%2 g#f0f=0f0 , i%6 g#ff00ff=00ff00 )
   17-- Hover, background image color filter opacity hover i%[x] and [ b%[xx]=[xx] or b%[x]=[x] ] (Example: i%5 b%15=9 , i%85 b%5=100 [or g%5= ] )
 
 v 1.5.0
   18-- Opacity, "img" tag opacity i%[xx] or i%[x](Example: <img src="img/logo.png" class="i%3"> )
   19-- Hover, "img" tag opacity i%[xx]=[xx] or i%[x]=[x](Example: <img src="img/logo.png" class="i%3="> )
   20-- Color, Invert color (Example: b#ff00ff= means: b#ff00ff=00ff00 , t#=ff00ff means: t#t00ff00=ff00ff )

 v 1.5.1
   21-- Improve, IE9+ background image  

 v 1.5.2
   22-- Improve, Bugs 

 v 1.5.3:
   23-- Transition, Auto transition (background color and image 0.3s, text 0.1s)
   24-- Improve, Background images after resize
   25-- Improve, Background image class (for JQuery)
 
 v 1.6.0:
   26-- Improve, Background image class in chrome
   27-- Filter, Background images Gray Scale filter
   28-- Hover, Background images Gray Scale filter hover
   29-- Improve, Background image class hover
 
 v 1.6.1:
   30-- Filter, Compelete background image filter i#[gbisdl] from i#000000 to i#ffffff
                                                   g = grayscale
                                                   b = blur
                                                   i = invert
                                                   s = sepia color
                                                   d = darkness
                                                   l = low-contrast
                                                   Example: i#000000  means original image
                                                   Example: i#800000  means 50% gray scaled image
   31-- Hover, Compelete background image filter hover i#[gbisdl]=[gbisdl] (Example: i#020000=800000 )
   32-- Improve, Background image filter in chrome, safari, ...
```