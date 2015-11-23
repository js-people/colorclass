/*!
 *  Color Class 1.0 by @colorclass - http://colorclass.ir
 *  github = https://github.com/js-people (firefox - IE 8+ - edge - chrome - safari)
 */

fColorClass();
function fColorClass() {
	var i = 0;
	var vElement = document.getElementsByTagName("*").item(i);

	while (vElement != undefined) {
		var vClass = vElement.attributes.getNamedItem("class");

		if(vClass != undefined) {
			var vString = vClass.value;
			var vBackGround = vString.indexOf("#");
			var vText = vString.indexOf("@");
			var vOpacity = vString.indexOf("%");
			var vBColour = "";
			var vTColour = "";
			var vOPercent = "";

			if (vBackGround != -1) {
				var vSpace = vString.indexOf(" ", vBackGround);

				if(vSpace != -1) {
					vBColour = vString.substring(vBackGround, vSpace);
				}
				else {
					vBColour = vString.substring(vBackGround);
				}
			}

			if (vText != -1) {
				var vSpace = vString.indexOf(" ", vText);

				if(vSpace != -1) {
					vTColour = vString.substring(vText, vSpace);
				}
				else {
					vTColour = vString.substring(vText);
				}

				vTColour = vTColour.replace("@", "#");

				var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
							var matches = patt.exec(vTColour);

				var r = parseInt(matches[1], 16);
				var g = parseInt(matches[2], 16);
				var b = parseInt(matches[3], 16);
				var rgb = "rgb(" + r + "," + g + "," + b + ")";

				vElement.style.color = rgb;
			}

			if (vOpacity != -1) {
				var vSpace = vString.indexOf(" ", vOpacity);

				if(vSpace != -1) {
					vOPercent = vString.substring(vOpacity, vSpace);
				}
				else {
					vOPercent = vString.substring(vOpacity);
				}

				vOPercent = vOPercent.replace("%", "0.");

				if(vOPercent == "0.100") {
					vOPercent = "1";
				}
			}
			else {
				vOPercent = "1";
			}

			if (vOpacity != -1 || vBColour != "") {
				fChangeOpacity(vElement, vOPercent, vBColour);
			}
		}
		i++;
		vElement = document.getElementsByTagName("*").item(i);
	}
}

function fChangeOpacity(vElement, vValue, vBColor) {
	var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;

	if(vBColor == "") 
	{
		if (vElement.currentStyle) { //IE ...
			var matches = patt.exec(vElement.currentStyle["background-color"]);

			if(matches != undefined)
			{
				var r = parseInt(matches[1], 16);
				var g = parseInt(matches[2], 16);
				var b = parseInt(matches[3], 16);
				var rgba = "rgba(" + r + "," + g + "," + b + "," + vValue + ")";

				vElement.style.backgroundColor = rgba;
			}
		}
		else if (window.getComputedStyle) { //firefox
		   vElement.style.backgroundColor = document.defaultView.getComputedStyle(vElement,null).getPropertyValue("background-color").replace(")", "," + vValue + ")").replace("rgb", "rgba");
		}
	}
	else {
		var matches = patt.exec(vBColor);

		var r = parseInt(matches[1], 16);
		var g = parseInt(matches[2], 16);
		var b = parseInt(matches[3], 16);
		var rgba = "rgba(" + r + "," + g + "," + b + "," + vValue + ")";

		vElement.style.backgroundColor = rgba;
	}
}