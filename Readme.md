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
- Add a class like: **@5b8930** into your tag, without any CSS code. Example:

```
<div class="@19b5fe">it is a div with blue text</div>
<p class="@dc3023">it is a paragraph with red text</p>
<i class="fa fa-check @5b8930"></i> it is a green font-icon
```

### Background color:
- Add a class like **#19b5fe** into your tag, without any CSS code. Example:

```
<div class="col-md-12 #19b5fe">it is a div with blue background</div>
<span class="#dc3023">it is a span with red background</span>
<table class="#5b8930">it is a table with green background</table> 
```

### Background opacity:
- Add a class like **%50** or **%5** into your tag, without any CSS code. Example:

```
<div class="col-md-12 #19b5fe %5">it is a div with blue background and 0.5 opacity</div>
<span class="#dc3023 %35">it is a span with red background and 0.35 opacity</span>
<table class="%90">it is a table with css background and 0.9 opacity</table> 
```
Note: In this case, just the background Alpha would be changed and the entire contents of the box would be with one hundred percent clearly displayed.


## Specifications:
```
1--- Class, Reading all "class" tags (Example: <div class=""></div> )
2--- Function, "cc_fColorClass(1, 1, 1)" resets all of the cchtml colors and opacities and hovers.
               "cc_fColorClass(0, 1, 0)" resets all of the cchtml text colors and opacities.
               "cc_fColorClass(0, 0, 1)" resets all of the cchtml background colors and opacities.
               "cc_fColorClass(0, 1, 1)" resets all of the cchtml text and backgrounds colors and opacities.
3--- Color, Text color @[xxxxxx] or @[xxx] (Example: <div class="@f1b2af"></div>, @f0f )
4--- Color, BackGround color #[xxxxxx] or #[xxx] (Example: #ff00ff, #f0f )
5--- Opacity, BackGround opacity %[xx] or %[x] (Example: %35 , %05 , %4 [or %40] )
6--- Opacity, Text opacity ![xx] or ![x] (Example: !35 , !05 , !4 [or !40] )
7--- Hover, Text color hover @[xxx]=[xxx] or @[xxxxxx]=[xxxxxx] (Example: @f0f=0f0 , @ff00ff=00ff00 )
8--- Hover, Text opacity hover ![xx]=[xx] or ![x]=[x] (Example: !15=9 , !5=100 [or !5= ] )
9--- Hover, BackGround color hover #[xxx]=[xxx] or #[xxxxxx]=[xxxxxx] (Example: #f0f=0f0 , #ff00ff=00ff00 )
10-- Hover, BackGround opacity hover %[xx]=[xx] or %[x]=[x] (Example: %15=9 , %5=100 [or %5= ] )
11-- Improve, IE and Chrome
 This revision:
12-- Transition, Auto transition (all 0.3s)

```