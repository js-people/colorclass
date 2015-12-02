/*!
 *  Color Class (CCHTML Compiler)
 *  CCHTML 1.3.0 by @colorclass - http://colorclass.ir
 *  github = https://github.com/js-people (firefox - IE 8+ - edge - chrome - safari)
 *
 * Specifications:
 * 1--- Class, Reading all "class" tags (Example: <div class=""></div> )
 * 2--- Function, "cc_fColorClass(1, 1, 1)" resets all of the cchtml colors and opacities and hovers.
 *                "cc_fColorClass(0, 1, 0)" resets all of the cchtml text colors and opacities.
 *                "cc_fColorClass(0, 0, 1)" resets all of the cchtml background colors and opacities.
 *                "cc_fColorClass(0, 1, 1)" resets all of the cchtml text and backgrounds colors and opacities.
 * 3--- Color, Text color @[xxxxxx] or @[xxx] (Example: <div class="@f1b2af"></div>, @f0f )
 * 4--- Color, BackGround color #[xxxxxx] or #[xxx] (Example: #ff00ff, #f0f )
 * 5--- Opacity, BackGround opacity %[xx] or %[x] (Example: %35 , %05 , %4 [or %40] )
 * 6--- Opacity, Text opacity ![xx] or ![x] (Example: !35 , !05 , !4 [or !40] )
 * 7--- Hover, Text color hover @[xxx]=[xxx] or @[xxxxxx]=[xxxxxx] (Example: @f0f=0f0 , @ff00ff=00ff00 )
 * 8--- Hover, Text opacity hover ![xx]=[xx] or ![x]=[x] (Example: !15=9 , !5=100 [or !5= ] )
 * 9--- Hover, BackGround color hover #[xxx]=[xxx] or #[xxxxxx]=[xxxxxx] (Example: #f0f=0f0 , #ff00ff=00ff00 )
 * 10-- Hover, BackGround opacity hover %[xx]=[xx] or %[x]=[x] (Example: %15=9 , %5=100 [or %5= ] )
 *
 * This revision:
 * 11-- Improve, IE and Chrome
 */

var cc_gvPatt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;

cc_fColorClass(1, 1, 1);

function cc_fColorClass(cc_bHover, cc_bTextOpC, cc_bBGOpC) {
	var cc_i = 0;
	var cc_vElement = document.getElementsByTagName("*").item(cc_i);

	while (cc_vElement != "undefined" && cc_vElement != "null") {
		var cc_vClass = cc_vElement.getAttribute("class");//attributes.getNamedItem

		if(cc_vClass != undefined) {
			var cc_vString = cc_vClass;//.value;
			var cc_vBackGround = -1;
			var cc_vBGOpacity = -1;
			var cc_vBColour = "";
			var cc_vBGOp = "";
			var cc_vText = -1;
			var cc_vTOpacity = -1;
			var cc_vTColour = "";
			var cc_vTOp = "";

                        if(cc_bTextOpC == 1){
				cc_vText = cc_vString.indexOf("@");
				cc_vTOpacity = cc_vString.indexOf("!");

				if (cc_vText != -1) {
					var cc_vSpace = cc_vString.indexOf(" ", cc_vText);

					if(cc_vSpace != -1) {
						cc_vTColour = cc_vString.substring(cc_vText, cc_vSpace);
					}
					else {
						cc_vTColour = cc_vString.substring(cc_vText);
					}
					cc_vTColour = cc_vTColour.replace("@", "#");
				}

				if (cc_vTOpacity != -1) {
					var cc_vSpace = cc_vString.indexOf(" ", cc_vTOpacity);

					if(cc_vSpace != -1) {
						cc_vTOp = cc_vString.substring(cc_vTOpacity, cc_vSpace);
					}
					else {
						cc_vTOp = cc_vString.substring(cc_vTOpacity);
					}
					cc_vTOp = cc_vTOp.replace("!", "0.");
				}
                        }

                        if(cc_bBGOpC == 1){
				cc_vBackGround = cc_vString.indexOf("#");
				cc_vBGOpacity = cc_vString.indexOf("%");

				if (cc_vBackGround != -1) {
					var cc_vSpace = cc_vString.indexOf(" ", cc_vBackGround);

					if(cc_vSpace != -1) {
						cc_vBColour = cc_vString.substring(cc_vBackGround, cc_vSpace);
					}
					else {
						cc_vBColour = cc_vString.substring(cc_vBackGround);
					}
				}

				if (cc_vBGOpacity != -1) {
					var cc_vSpace = cc_vString.indexOf(" ", cc_vBGOpacity);

					if(cc_vSpace != -1) {
						cc_vBGOp = cc_vString.substring(cc_vBGOpacity, cc_vSpace);
					}
					else {
						cc_vBGOp = cc_vString.substring(cc_vBGOpacity);
					}
					cc_vBGOp = cc_vBGOp.replace("%", "0.");
				}
                        }

                        if(cc_vBackGround != -1
                        	|| cc_vBGOpacity != -1
                                || cc_vText != -1
				|| cc_vTOpacity != -1){
				cc_fSetColorsAndOpacities(cc_vElement, cc_vBColour, cc_vBGOp, cc_vTColour, cc_vTOp, cc_bHover);
                        }
		}
		cc_i++;
		cc_vElement = document.getElementsByTagName("*").item(cc_i);
	}
}

function cc_fSetColorsAndOpacities(cc_vElement, cc_vBColor, cc_vBGOpacity, cc_vTColor, cc_vTOpacity, cc_bHover) {
        var cc_vTOpHover = cc_vTOpacity.indexOf("=");
        var cc_vTHover = cc_vTColor.indexOf("=");
        var cc_vBGOpHover = cc_vBGOpacity.indexOf("=");
        var cc_vBGHover = cc_vBColor.indexOf("=");
        var cc_vTOpH = "";
        var cc_vTH = "";
        var cc_vBGOpH = "";
        var cc_vBGH = "";

        if(cc_vTOpHover != -1){
        	cc_vTOpH = "0." + cc_vTOpacity.substring(cc_vTOpHover + 1);

        	if(cc_vTOpH == "0." || cc_vTOpH == "0.100")
                	cc_vTOpH = "1";

                cc_vTOpacity = cc_vTOpacity.substring(0, cc_vTOpHover);
        }

        if(cc_vTHover != -1){
        	cc_vTH = "#" + cc_vTColor.substring(cc_vTHover + 1);

                cc_vTColor = cc_vTColor.substring(0, cc_vTHover);
        }

        if(cc_vBGOpHover != -1){
        	cc_vBGOpH = "0." + cc_vBGOpacity.substring(cc_vBGOpHover + 1);

        	if(cc_vBGOpH == "0." || cc_vBGOpH == "0.100")
                	cc_vBGOpH = "1";

                cc_vBGOpacity = cc_vBGOpacity.substring(0, cc_vBGOpHover);
        }

        if(cc_vBGHover != -1){
        	cc_vBGH = "#" + cc_vBColor.substring(cc_vBGHover + 1);

                cc_vBColor = cc_vBColor.substring(0, cc_vBGHover);

        }

	if(cc_vBGOpacity == "0.100") {
		cc_vBGOpacity = "1";
	}

        if(cc_bHover == 1
        	&& (cc_vTOpH != ""
                	|| cc_vTH != ""
                	|| cc_vBGOpH != ""
                	|| cc_vBGH != ""))
        {
        	if(cc_vTH == "")
                	cc_vTH = cc_vTColor;
        	if(cc_vBGH == "")
                	cc_vBGH = cc_vBColor;

        	if(cc_vTOpH == "")
                	cc_vTOpH = cc_vTOpacity;
        	if(cc_vBGOpH == "")
                	cc_vBGOpH = cc_vBGOpacity;

                cc_vElement.onmouseenter = function(){
                        cc_fSetObjectTextRBGA(cc_vElement, cc_vTH, cc_vTOpH);
                        cc_fSetObjectBackGroundRBGA(cc_vElement, cc_vBGH, cc_vBGOpH);
                };

                cc_vElement.onmouseleave = function(){
                        cc_fSetObjectTextRBGA(cc_vElement, cc_vTColor, cc_vTOpacity);
                        cc_fSetObjectBackGroundRBGA(cc_vElement, cc_vBColor, cc_vBGOpacity);
                };
        }
        cc_fSetObjectTextRBGA(cc_vElement, cc_vTColor, cc_vTOpacity);
        cc_fSetObjectBackGroundRBGA(cc_vElement, cc_vBColor, cc_vBGOpacity);
}

function cc_fSetObjectTextRBGA(cc_vElement, cc_vTColor, cc_vTOpacity){
	if(cc_vTColor.length == 4){
        	cc_vTColor = "#" + cc_vTColor.substring(1,2) + cc_vTColor.substring(1,2) + cc_vTColor.substring(2,3) + cc_vTColor.substring(2,3) + cc_vTColor.substring(3,4) + cc_vTColor.substring(3,4);
        }

        if(cc_vTColor.length == 7){
        	/*if (cc_vElement.currentStyle) { //IE ...
                	cc_vElement.style.color = cc_vTColor;
                }
                else if (window.getComputedStyle) { //firefox */
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
	       	                cc_vElement.style.color = cc_rgba;
	               }
               //}
        }
        else if(cc_vTOpacity != ""){
		/*if (cc_vElement.currentStyle) { //IE ...
	        	;//cc_fSetObjectBackGroundRBGA(cc_vElement, cc_vElement.currentStyle["color"], cc_vTOpacity);
		}
		else if (window.getComputedStyle) { //firefox*/
                	var cc_vCurrentColor = "";
                        var cc_rgbaPos = -1;

                	if(cc_vCurrentColor == ""
                        	|| cc_vCurrentColor == "transparent"
                        	|| cc_vCurrentColor == "initial"
                        	|| cc_vCurrentColor == "inherit"
                        	|| cc_vCurrentColor.indexOf("rgb") == -1)
                        {
                          	cc_vElement.style.color = "#ffffff";
                        }
                	cc_vCurrentColor = cc_vElement.style.color;
                        cc_rgbaPos = cc_vCurrentColor.indexOf("rgba");

                        if(cc_rgbaPos != -1){
                        	cc_rgbaPos = cc_vCurrentColor.lastIndexOf(",");
                        	cc_vCurrentColor = cc_vCurrentColor.substring(0, cc_rgbaPos) + ")";
                        }
                        else
                        	cc_vCurrentColor = cc_vCurrentColor.replace("rgb", "rgba");

                        cc_vElement.style.color = cc_vCurrentColor.replace(")", "," + cc_vTOpacity + ")");
                //}
        }
}

function cc_fSetObjectBackGroundRBGA(cc_vElement, cc_vBColor, cc_vBGOpacity){
	if(cc_vBColor.length == 4){
        	cc_vBColor = "#" + cc_vBColor.substring(1,2) + cc_vBColor.substring(1,2) + cc_vBColor.substring(2,3) + cc_vBColor.substring(2,3) + cc_vBColor.substring(3,4) + cc_vBColor.substring(3,4);
        }

        if(cc_vBColor.length == 7){
        	/*if (cc_vElement.currentStyle) { //IE ...
                	cc_vElement.style.backgroundColor = cc_vBColor;
                }
                else if (window.getComputedStyle) { //firefox */
	                var cc_matches = cc_gvPatt.exec(cc_vBColor);

	                if(cc_matches != undefined){
	           	        var cc_r = parseInt(cc_matches[1], 16);
	   	                var cc_g = parseInt(cc_matches[2], 16);
	           	        var cc_b = parseInt(cc_matches[3], 16);

			        if(cc_vBGOpacity == ""){
			        	var cc_rgba = "rgb(" + cc_r + "," + cc_g + "," + cc_b + ")";
	                        }
	                        else{
			        	var cc_rgba = "rgba(" + cc_r + "," + cc_g + "," + cc_b + "," + cc_vBGOpacity + ")";
	                        }
	                        cc_vElement.style.backgroundColor = cc_rgba;
	                }
                //}
        }
        else if(cc_vBGOpacity != ""){
		/*if (cc_vElement.currentStyle) { //IE ...
			;//cc_fSetObjectBackGroundRBGA(cc_vElement, cc_vElement.currentStyle["background-color"], cc_vBGOpacity);
                	//document.defaultView.getComputedStyle(cc_vElement,null).getPropertyValue("background-color")
                }
		else if (window.getComputedStyle) { //firefox */
                	var cc_vCurrentColor = "";
                        var cc_rgbaPos = -1;

                	if(cc_vCurrentColor == ""
                        	|| cc_vCurrentColor == "transparent"
                        	|| cc_vCurrentColor == "initial"
                        	|| cc_vCurrentColor == "inherit"
                        	|| cc_vCurrentColor.indexOf("rgb") == -1)
                        {
                          	cc_vElement.style.backgroundColor = "#ffffff";
                        }
                	cc_vCurrentColor = cc_vElement.style.backgroundColor;
                        cc_rgbaPos = cc_vCurrentColor.indexOf("rgba");

                        if(cc_rgbaPos != -1){
                        	cc_rgbaPos = cc_vCurrentColor.lastIndexOf(",");
                        	cc_vCurrentColor = cc_vCurrentColor.substring(0, cc_rgbaPos) + ")";
                        }
                        else
                        	cc_vCurrentColor = cc_vCurrentColor.replace("rgb", "rgba");

                        cc_vElement.style.backgroundColor = cc_vCurrentColor.replace(")", "," + cc_vBGOpacity + ")");
                //}
        }
}
