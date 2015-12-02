$(document).ready(function() {

    // fast test Background
	$("#BGblack").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#000000');
	cc_fColorClass(0, 0, 1);
	})

    $("#BGwhite").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#ffffff');
        cc_fColorClass(0, 0, 1);
    })

    $("#BGred").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#ff0000');
        cc_fColorClass(0, 0, 1);
    })

    $("#BGblue").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#0000ff');
        cc_fColorClass(0, 0, 1);
    })

    $("#BGgreen").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#00ff00');
        cc_fColorClass(0, 0, 1);
    })

    $("#BGyellow").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)#\S+/g) || []).join(' ');
        }).addClass('#ffff00');
        cc_fColorClass(0, 0, 1);
    })


    // fast test Text
    $("#Tblack").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@000000');
        cc_fColorClass(0, 1, 0);
    })

    $("#Twhite").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@ffffff');
        cc_fColorClass(0, 1, 0);
    })

    $("#Tred").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@ff0000');
        cc_fColorClass(0, 1, 0);
    })

    $("#Tblue").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@0000ff');
        cc_fColorClass(0, 1, 0);
    })

    $("#Tgreen").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@00ff00');
        cc_fColorClass(0, 1, 0);
    })

    $("#Tyellow").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)@\S+/g) || []).join(' ');
        }).addClass('@ffff00');
        cc_fColorClass(0, 1, 0);
    })





    // fast test Background Opacity
    $("#opa3").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)%\S+/g) || []).join(' ');
        }).addClass('%3');
        cc_fColorClass(0, 0, 1);
    }); 

    $("#opa6").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)%\S+/g) || []).join(' ');
        }).addClass('%6');
        cc_fColorClass(0, 0, 1);
    }); 

    $("#opa9").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)%\S+/g) || []).join(' ');
        }).addClass('%9');
        cc_fColorClass(0, 0, 1);
    }); 

});
