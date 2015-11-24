# [ColorClass](http://ColorClass.ir)
-----------
Follow the steps below:
- Go to our home page.
- Download javascript file and copy into your javascripts folder (Choose one of files).
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
<div class="@19b5fe"> it is a div with blue text </div>
<p class="@dc3023"> it is a paragraph with red text </p>
<i class="fa fa-check @5b8930"></i> it is a green font-icon
```

### Background color:
- Add a class like **#19b5fe** into your tag, without any CSS code. Example:

```
<div class="col-md-12 #19b5fe"> it is a div with blue background </div>
<span class="#dc3023"> it is a span with red background </span>
<table class="#5b8930"> it is a table with green background </table> 
```

### Background opacity:
- Add a class like **%50** or **%5** into your tag, without any CSS code. Example:

```
<div class="col-md-12 #19b5fe %5"> it is a div with blue background and 0.5 opacity </div>
<span class="#dc3023 %35"> it is a span with red background and 0.35 opacity </span>
<table class="%90"> it is a table with css background and 0.9 opacity </table> 
```
Note: In this case, just the background Alpha would be changed and the entire contents of the box would be with one hundred percent clearly displayed.