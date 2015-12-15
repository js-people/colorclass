/*!
 * Color Class (CCHTML Compiler)
 *  CCHTML 1.6.1 by @colorclass - http://colorclass.ir
 *  github = https://github.com/js-people (firefox - IE 9+ - edge - chrome - safari - opera)
 *
 * Specifications:
 * v 1.0.0
 *  1--- Class, Reading all "class" tags (Example: <div class=""></div> )
 *  2--- Function, "cc_fColorClass(15)" resets all of the cchtml text colors, opacities and hovers,
 *                                      resets all of the cchtml background colors, opacities and hovers,
 *                                      resets all of the cchtml background images color filters, opacities and hovers.
 *                 "cc_fColorClass(2)" resets all of the cchtml text colors and opacities.
 *                 "cc_fColorClass(4)" resets all of the cchtml background colors and opacities.
 *                 "cc_fColorClass(6)" resets all of the cchtml text and backgrounds colors and opacities.
 *  3--- Color, Text color t#[xxxxxx] or t#[xxx] (Example: <div class="t#f1b2af"></div>, t#f0f )
 *  4--- Color, BackGround color b#[xxxxxx] or b#[xxx] (Example: b#ff00ff, b#f0f )
 *
 * v 1.1.0
 *  5--- Opacity, BackGround opacity b%[xx] or b%[x] (Example: b%35 , b%05 , b%4 [or b%40] )
 *
 * v 1.2.0
 *  6--- Opacity, Text opacity t%[xx] or t%[x] (Example: t%35 , t%05 , t%4 [or t%40] )
 *  7--- Hover, Text color hover t#[xxx]=[xxx] or t#[xxxxxx]=[xxxxxx] (Example: t#f0f=0f0 , t#ff00ff=00ff00 )
 *  8--- Hover, Text opacity hover t%[xx]=[xx] or t%[x]=[x] (Example: t%15=9 , t%5=100 [or t%5= ] )
 *  9--- Hover, BackGround color hover b#[xxx]=[xxx] or b#[xxxxxx]=[xxxxxx] (Example: b#f0f=0f0 , b#ff00ff=00ff00 )
 *  10-- Hover, BackGround opacity hover b%[xx]=[xx] or b%[x]=[x] (Example: b%15=9 , b%5=100 [or b%5= ] )
 *
 * v 1.3.0
 *  11-- Improve, IE9+ and Chrome
 *
 * v 1.3.1
 *  12-- Transition, Auto transition (all 0.3s)
 *
 * v 1.4.0 (*New Protocol: "#"=>"b#" , "%"=>"b%" , "@"=>"t#" , "!"=>"t%" )
 *  13-- Opacity, background image opacity i%[xx] or  (Example: i%35 , i%05 , i%4 [or i%40] )
 *  14-- Filter, background image color filter i%[x] and [ b#[xxxxxx] or b#[xxx] ] (Example: i%1 b#ff00ff, i%5 b#f0f )
 *  15-- Hover, background image hover i%[xx]=[xx] or i%[x]=[x] (Example: i%15=9 , i%5=100 [or i%5= ] )
 *  16-- Hover, background image color filter hover i%[x] and [ b#[xxx]=[xxx] or b#[xxxxxx]=[xxxxxx] ] (Example: i%2 g#f0f=0f0 , i%6 g#ff00ff=00ff00 )
 *  17-- Hover, background image color filter opacity hover i%[x] and [ b%[xx]=[xx] or b%[x]=[x] ] (Example: i%5 b%15=9 , i%85 b%5=100 [or g%5= ] )
 *
 * v 1.5.0
 *  18-- Opacity, "img" tag opacity i%[xx] or i%[x](Example: <img src="img/logo.png" class="i%3"> )
 *  19-- Hover, "img" tag opacity i%[xx]=[xx] or i%[x]=[x](Example: <img src="img/logo.png" class="i%3="> )
 *  20-- Color, Invert color (Example: b#ff00ff= means: b#ff00ff=00ff00 , t#=ff00ff means: t#t00ff00=ff00ff )
 *
 * v 1.5.1:
 *  21-- Improve, IE9+ background image
 *
 * v 1.5.2:
 *  22-- Improve, Bugs
 *
 * v 1.5.3:
 *  23-- Transition, Auto transition (background color and image 0.3s, text 0.1s)
 *  24-- Improve, Background images after resize
 *  25-- Improve, Background image class (for JQuery)
 *
 * v 1.6.0:
 *  26-- Improve, Background image class in chrome
 *  27-- Filter, Background images Gray Scale filter
 *  28-- Hover, Background images Gray Scale filter hover
 *  29-- Improve, Background image class hover
 *
 * This revision (v 1.6.1):
 *  30-- Filter, Compelete background image filter i#[gbisdl] from i#000000 to i#ffffff
                                                    g = grayscale
                                                    b = blur
                                                    i = invert
                                                    s = sepia color
                                                    d = darkness
                                                    l = low-contrast
                                                    Example: i#000000  means original image
                                                    Example: i#800000  means 50% gray scaled image
 *  31-- Hover, Compelete background image filter hover i#[gbisdl]=[gbisdl] (Example: i#020000=800000 )
 *  32-- Improve, Background image filter in chrome, safari, ...
 *
 */

var cc_gvPatt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;

//window.addEventListener("load", function(){cc_fColorClass(15);});

//window.onload = function(){cc_fColorClass(15);};

cc_fColorClass(15);

function cc_fColorClass(cc_vArg) {
	var cc_i = 0;
	var cc_vElement = document.getElementsByTagName("*").item(cc_i);

	while (cc_vElement != undefined && cc_vElement != "null") {
		var cc_vString = cc_vElement.getAttribute("class");

		if(cc_vString != undefined) {
			var cc_vBColour = "";
			var cc_vBGOp = "";
			var cc_vTColour = "";
			var cc_vTOp = "";
			var cc_vBGI = "";
                        var vStringLower = cc_vString.toLowerCase();
        		var cc_vBGIGS = cc_fGetCommand(cc_vString.toLowerCase(), "i#", "0.");

                        if(cc_vArg&0x08){
                        	cc_vBGI = cc_fGetCommand(vStringLower, "i%", "0.");
                                cc_vBGIGS = cc_fGetCommand(vStringLower, "i#", "#");

                                if(cc_vBGI != "" || cc_vBGIGS != ""){
                                	cc_fSetBGOpacity(cc_vElement, cc_vBGI, cc_vString, cc_vBGIGS);
                                }
                        }

                        if(cc_vArg&0x02){
				cc_vTColour = cc_fGetCommand(vStringLower, "t#", "#");
				cc_vTOp = cc_fGetCommand(vStringLower, "t%", "0.");
                        }

                        if(cc_vArg&0x04){
				cc_vBColour = cc_fGetCommand(vStringLower, "b#", "#");
				cc_vBGOp = cc_fGetCommand(vStringLower, "b%", "0.");
                        }

			if(cc_vBColour != ""
                        	|| cc_vBGOp != ""
                        	|| cc_vTOp != ""
                        	|| cc_vTColour != ""){
				cc_fSetColorsAndOpacities(cc_vElement, cc_vBColour, cc_vBGOp, cc_vTColour, cc_vTOp, cc_vArg);
                        }
		}
		cc_i++;
		cc_vElement = document.getElementsByTagName("*").item(cc_i);
	}
}

function cc_fSetColorsAndOpacities(cc_vElement, cc_vBColor, cc_vBGOpacity, cc_vTColor, cc_vTOpacity, cc_vArg) {
        var cc_vT = cc_fGetHoverValue(cc_vTColor, 1);
        var cc_vTOp = cc_fGetHoverValue(cc_vTOpacity, 0);
        var cc_vBG = cc_fGetHoverValue(cc_vBColor, 1);
        var cc_vBGOp = cc_fGetHoverValue(cc_vBGOpacity, 0);

        if(cc_vArg&0x01
        	&& (cc_vTOp[1] != ""
                	|| cc_vT[1] != ""
                	|| cc_vBGOp[1] != ""
                	|| cc_vBG[1] != ""))
        {
        	if(cc_vT[1] == "")
                	cc_vT[1] = cc_vT[0];
                else
                	cc_vElement.style.transition = "all 0.1s";
        	if(cc_vBG[1] == "")
                	cc_vBG[1] = cc_vBG[0];
                else
                	cc_vElement.style.transition = "all 0.3s";

        	if(cc_vTOp[1] == "")
                	cc_vTOp[1] = cc_vTOp[0];
                else
                	cc_vElement.style.transition = "all 0.1s";
        	if(cc_vBGOp[1] == "")
                	cc_vBGOp[1] = cc_vBGOp[0];
                else
                	cc_vElement.style.transition = "all 0.3s";

                cc_vElement.addEventListener("mouseenter", function(){
                        cc_fSetObjectRBGA(cc_vElement, cc_vT[1], cc_vTOp[1], 1);
                        cc_fSetObjectRBGA(cc_vElement, cc_vBG[1], cc_vBGOp[1], 0);
                });

                cc_vElement.addEventListener("mouseleave", function(){
                        cc_fSetObjectRBGA(cc_vElement, cc_vT[0], cc_vTOp[0], 1);
                        cc_fSetObjectRBGA(cc_vElement, cc_vBG[0], cc_vBGOp[0], 0);
                });
        }
        cc_fSetObjectRBGA(cc_vElement, cc_vT[0], cc_vTOp[0], 1);
        cc_fSetObjectRBGA(cc_vElement, cc_vBG[0], cc_vBGOp[0], 0);
}

function cc_fSetObjectRBGA(cc_vElement, cc_vTColor, cc_vTOpacity, cc_bText){
        if(cc_vTColor.length == 7){
        	if (0) { //IE8- ...
                	if(cc_bText == 1)
                		cc_vElement.style.color = cc_vTColor;
                        else
                        	cc_vElement.style.backgroundColor = cc_vTColor;
                }
                else { //firefox, chrome, safari, IE9+ ...
	       	        var cc_matches = cc_gvPatt.exec(cc_vTColor);

	                if(cc_matches != undefined){
	               	        var cc_r = parseInt(cc_matches[1], 16);
	       	                var cc_g = parseInt(cc_matches[2], 16);
	               	        var cc_b = parseInt(cc_matches[3], 16);

			        if(cc_vTOpacity == ""){
			        	var cc_rgba = "rgb(" + cc_r + "," + cc_g + "," + cc_b + ")";
	                        }
	                        else{
			        	var cc_rgba = "rgba(" + cc_r + "," + cc_g + "," + cc_b + "," + cc_vTOpacity + ")";
	                        }

	                	if(cc_bText == 1)
	                		cc_vElement.style.color = cc_rgba;
	                        else
	                        	cc_vElement.style.backgroundColor = cc_rgba;
	               }
        	}
        }
        else if(cc_vTOpacity != ""){
		if (0) { //IE8- ...
	        	;
                }
		else { //firefox, chrome, safari, IE9+ ...
                	var cc_vCurrentColor = (cc_bText == 1?cc_vElement.style.color:cc_vElement.style.backgroundColor);
                        var cc_rgbaPos = -1;

                	if(cc_vCurrentColor == ""
                        	|| cc_vCurrentColor == "transparent"
                        	|| cc_vCurrentColor == "initial"
                        	|| cc_vCurrentColor == "inherit"
                        	|| cc_vCurrentColor.indexOf("rgb") == -1)
                        {
                          	cc_vCurrentColor = "rgba(255,255,255," + cc_vTOpacity + ")";
                        }
                        else
                        {
	                        cc_rgbaPos = cc_vCurrentColor.indexOf("rgba");

	                        if(cc_rgbaPos != -1){
	                        	cc_rgbaPos = cc_vCurrentColor.lastIndexOf(",");
	                        	cc_vCurrentColor = cc_vCurrentColor.substring(0, cc_rgbaPos) + ")";
	                        }
	                        else
	                        	cc_vCurrentColor = cc_vCurrentColor.replace("rgb", "rgba");

	                        cc_vCurrentColor = cc_vCurrentColor.replace(")", "," + cc_vTOpacity + ")");
                        }

                        if(cc_bText == 1)
		               	cc_vElement.style.color = cc_vCurrentColor;
		        else
		               	cc_vElement.style.backgroundColor = cc_vCurrentColor;
                }
        }
}

function cc_fGetCommand(cc_vString, cc_vStr1, cc_vStr2){
	var cc_vCmdPos = cc_vString.indexOf(cc_vStr1);

	if (cc_vCmdPos != -1) {
        	var cc_vSpace = cc_vString.indexOf(" ", cc_vCmdPos);

                if(cc_vSpace != -1) {
                	return (cc_vString.substring(cc_vCmdPos, cc_vSpace).replace(cc_vStr1, cc_vStr2));
                }
                else {
                	return (cc_vString.substring(cc_vCmdPos).replace(cc_vStr1, cc_vStr2));
                }
        }

        return ("");
}

function cc_fSetBGOpacity(cc_vElement, cc_vBGImage, cc_vString, cc_vBGIGS){
	var cc_vBGI = cc_fGetHoverValue(cc_vBGImage, 0);
	var cc_vBGI2 = cc_fGetHoverValue(cc_vBGIGS, 1);
        var cc_vBGIFilter_0 = cc_fGetFilterValue(cc_vBGI2[0]);
        var cc_vBGIFilter_1 = cc_fGetFilterValue(cc_vBGI2[1]);

        if(cc_vElement == "[object HTMLImageElement]"
        	|| cc_vElement == "[object HTMLSpanElement]")
        {
        	cc_vElement.style.transition = "all 0.3s";

	        if(cc_vBGI[1] != "")
	        {
	                cc_vElement.addEventListener("mouseenter", function(){
	                	cc_vElement.style.opacity = cc_vBGI[1];
	                });

	                cc_vElement.addEventListener("mouseleave", function(){
	                	cc_vElement.style.opacity = cc_vBGI[0];
	                });
	        }

	        if(cc_vBGI2[1] != "NaN")
	        {
	                cc_vElement.addEventListener("mouseenter", function(){
	        		var cc_vBGIFilter = cc_fGetFilterValue(cc_vBGI2[1]);

	                        cc_vElement.style.filter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
	                        cc_vElement.style.WebkitFilter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
	                });

		        cc_vElement.addEventListener("mouseleave", function(){
	        		var cc_vBGIFilter = cc_fGetFilterValue(cc_vBGI2[0]);

	                        cc_vElement.style.filter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
	                        cc_vElement.style.WebkitFilter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
	                });
	        }

                if(cc_vBGIGS != "")
                {
        		var cc_vBGIFilter = cc_fGetFilterValue(cc_vBGI2[0]);

                        cc_vElement.style.filter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
                        cc_vElement.style.WebkitFilter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
                }

                if(cc_vBGImage != "")
        		cc_vElement.style.opacity = cc_vBGI[0];
        }
        else
        {
        	var cc_vStyle = cc_vElement.getAttribute("style");
		var cc_vAddedElement1 = document.createElement("span");
		var cc_vAddedElement2 = document.createElement("div");
                var cc_vMargin = ((cc_vElement.currentStyle)?(cc_vElement.currentStyle.marginTop):document.defaultView.getComputedStyle(cc_vElement,null).getPropertyValue("margin-top"))
                			+ " " + ((cc_vElement.currentStyle)?(cc_vElement.currentStyle.marginRight):document.defaultView.getComputedStyle(cc_vElement,null).getPropertyValue("margin-right"))
                                        + " " + ((cc_vElement.currentStyle)?(cc_vElement.currentStyle.marginBottom):document.defaultView.getComputedStyle(cc_vElement,null).getPropertyValue("margin-bottom"))
                                        + " " + ((cc_vElement.currentStyle)?(cc_vElement.currentStyle.marginLeft):document.defaultView.getComputedStyle(cc_vElement,null).getPropertyValue("margin-left"));

	        cc_vString = cc_fClearCommands(cc_vString);
                cc_vBGImage = cc_vBGImage.replace("0.", " i%");
                cc_vBGIGS = cc_vBGIGS.replace("#", " i#");

		cc_vAddedElement1.setAttribute("class", cc_vString + cc_vBGImage + cc_vBGIGS);
		cc_vAddedElement2.setAttribute("class", cc_vString);
		cc_vAddedElement1.setAttribute("style", cc_vStyle);
		cc_vAddedElement2.setAttribute("style", cc_vStyle);
                window.addEventListener("resize", function(){
                	cc_vAddedElement1.style.width = cc_vAddedElement2.offsetWidth + "px";
                        cc_vAddedElement1.style.height = cc_vAddedElement2.offsetHeight + "px";
                });
	        cc_vAddedElement1.style.width = cc_vElement.offsetWidth + "px";
	        cc_vAddedElement1.style.height = cc_vElement.offsetHeight + "px";
	        cc_vAddedElement1.style.position = "absolute";
	        cc_vAddedElement2.style.position = "relative";

	        cc_vAddedElement2.innerHTML = cc_vElement.innerHTML;
	        cc_vAddedElement2.style.backgroundImage = "url('')";
	        cc_vElement.innerHTML = "";
		cc_vElement.setAttribute("class", "");
		cc_vElement.setAttribute("style", "");
	        cc_vElement.style.margin = cc_vMargin;
                cc_vAddedElement1.style.margin = "0.0em";
	        cc_vAddedElement2.style.margin = "0.0em";
                cc_vAddedElement1.style.transition = "all 0.3s";

	        if(cc_vBGI[1] != "")
	        {
	                cc_vAddedElement2.addEventListener("mouseenter", function(){
	                	cc_vAddedElement1.style.opacity = cc_vBGI[1];
	                });

	                cc_vAddedElement2.addEventListener("mouseleave", function(){
	                	cc_vAddedElement1.style.opacity = cc_vBGI[0];
	                });
	        }

	        if(cc_vBGI2[1] != "")
	        {
	                cc_vAddedElement2.addEventListener("mouseenter", function(){
	        		var cc_vBGIFilter = cc_fGetFilterValue(cc_vBGI2[1]);

	                        cc_vAddedElement1.style.filter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
	                        cc_vAddedElement1.style.WebkitFilter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
	                });

	                cc_vAddedElement2.addEventListener("mouseleave", function(){
	        		var cc_vBGIFilter = cc_fGetFilterValue(cc_vBGI2[0]);

	                        cc_vAddedElement1.style.filter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
	                        cc_vAddedElement1.style.WebkitFilter = "grayscale(" + cc_vBGIFilter[0] + "%) blur(" + cc_vBGIFilter[1] + "px) invert(" + cc_vBGIFilter[2] + "%) sepia(" + cc_vBGIFilter[3] + "%) brightness(" + cc_vBGIFilter[4] + "%) contrast(" + cc_vBGIFilter[5] + "%)";
	                });
	        }
	        cc_vElement.appendChild(cc_vAddedElement1);
	        cc_vElement.appendChild(cc_vAddedElement2);
        }
}

function cc_fGetFilterValue(cc_vBGIFilter){
	var cc_vGS = (parseInt(cc_vBGIFilter[1], 16)*100/16).toString(10);
	var cc_vBl = (parseInt(cc_vBGIFilter[2], 16)).toString(10);
	var cc_vIn = (parseInt(cc_vBGIFilter[3], 16)*100/16).toString(10);
	var cc_vSe = (parseInt(cc_vBGIFilter[4], 16)*100/16).toString(10);
	var cc_vBr = (100 - parseInt(cc_vBGIFilter[5], 16)*100/16).toString(10);
	var cc_vCo = (100 - parseInt(cc_vBGIFilter[6], 16)*100/16).toString(10);

        return ([cc_vGS, cc_vBl, cc_vIn, cc_vSe, cc_vBr, cc_vCo]);
}

function cc_fClearCommands(cc_vString){
        var cc_vI = 0;
        var cc_vJ = cc_vString.length;
        var cc_vClearedCommand = "";

        while(cc_vI < cc_vJ){
        	if(cc_vString[cc_vI+1] == "#"
                	|| cc_vString[cc_vI+1] == "%")
                {
	        	cc_vI = cc_vString.indexOf(" ", cc_vI);

	                if(cc_vI == -1) {
	                	return (cc_vClearedCommand);
	                }
                }
                cc_vClearedCommand += cc_vString[cc_vI];
        	cc_vI++;
        }

        return cc_vClearedCommand;
}

function cc_fGetHoverValue(cc_vString, cc_bColor) //cc_bColor= 0: opacity, 1:color
{
        var cc_vH = cc_vString.indexOf("=");
        var cc_vHover = "";

        if(cc_vH != -1)
        {
        	if(cc_bColor == 0)
                {
	        	cc_vHover = "0." + cc_vString.substring(cc_vH + 1);

                        if(cc_vHover == "0." || cc_vHover == "0.100")
                        	cc_vHover = "1";
                }
                else
	        	cc_vHover = "#" + cc_vString.substring(cc_vH + 1);

                cc_vString = cc_vString.substring(0, cc_vH);
        }

        if(cc_bColor == 1)
        {
	        if(cc_vString.length == 4)
	        	cc_vString = "#" + cc_vString[1] + cc_vString[1] + cc_vString[2] + cc_vString[2] + cc_vString[3] + cc_vString[3];

	        if(cc_vHover.length == 4)
	        	cc_vHover = "#" + cc_vHover[1] + cc_vHover[1] + cc_vHover[2] + cc_vHover[2] + cc_vHover[3] + cc_vHover[3];

	        if(cc_vString == "#")
                {
                        if(cc_vHover.length == 7)
                        {
                        	var cc_vValue = 33554431 - parseInt(cc_vHover.substring(1), 16);
                        	cc_vString = "#" + cc_vValue.toString(16).substring(1, 7);
                        }
                        else
                        	cc_vString = "#ffffff";
                }

	        if(cc_vHover == "#")
                {
                	var cc_vValue = 33554431 - parseInt(cc_vString.substring(1), 16);
                	cc_vHover = "#" + cc_vValue.toString(16).substring(1, 7);
                }
        }
        else if(cc_vString == "0." || cc_vString == "0.100")
        	cc_vString = "1";

        return ([cc_vString, cc_vHover]);
}

