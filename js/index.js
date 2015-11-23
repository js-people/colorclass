$(document).ready(function() {

    // fast test Background
	$("#BGblack").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#000000');
		fColorClass();
	})
    $("#BGwhite").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#ffffff');
        fColorClass();
    })
    $("#BGred").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#ff0000');
        fColorClass();
    })
    $("#BGblue").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#0000ff');
        fColorClass();
    })
    $("#BGgreen").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#00ff00');
        fColorClass();
    })
    $("#BGyellow").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#ffff00');
        fColorClass();
    })

    // fast test Text
    $("#Tblack").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@000000');
        fColorClass();
    })
    $("#Twhite").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@ffffff');
        fColorClass();
    })
    $("#Tred").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@ff0000');
        fColorClass();
    })
    $("#Tblue").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@0000ff');
        fColorClass();
    })
    $("#Tgreen").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@00ff00');
        fColorClass();
    })
    $("#Tyellow").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@ffff00');
        fColorClass();
    })


    // fast test Background Opacity
    $("#opa3").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)%\S+/g) || []).join(' ');
        }).addClass('%3');
        fColorClass();
    }); 
    $("#opa6").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)%\S+/g) || []).join(' ');
        }).addClass('%6');
        fColorClass();
    }); 
    $("#opa9").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)%\S+/g) || []).join(' ');
        }).addClass('%9');
        fColorClass();
    }); 


});