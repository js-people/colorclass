$(document).ready(function() {

    // fast test Background
    $("#BGblack").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)b#\S+/g) || []).join(' ');
        }).addClass('b#000');
       cc_fColorClass(4);
    })

    $("#BGwhite").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)b#\S+/g) || []).join(' ');
        }).addClass('b#fff');
        cc_fColorClass(4);
    })

    $("#BGred").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)b#\S+/g) || []).join(' ');
        }).addClass('b#f00');
        cc_fColorClass(4);
    })

    $("#BGblue").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)b#\S+/g) || []).join(' ');
        }).addClass('b#00f');
        cc_fColorClass(4);
    })

    $("#BGgreen").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)b#\S+/g) || []).join(' ');
        }).addClass('b#0f0');
        cc_fColorClass(4);
    })

    $("#BGyellow").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)b#\S+/g) || []).join(' ');
        }).addClass('b#ff0');
        cc_fColorClass(4);
    })


    // fast test Text
    $("#Tblack").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)t#\S+/g) || []).join(' ');
        }).addClass('t#000');
        cc_fColorClass(2);
    })

    $("#Twhite").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)t#\S+/g) || []).join(' ');
        }).addClass('t#fff');
        cc_fColorClass(2);
    })

    $("#Tred").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)t#\S+/g) || []).join(' ');
        }).addClass('t#f00');
        cc_fColorClass(2);
    })

    $("#Tblue").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)t#\S+/g) || []).join(' ');
        }).addClass('t#00f');
        cc_fColorClass(2);
    })

    $("#Tgreen").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)t#\S+/g) || []).join(' ');
        }).addClass('t#0f0');
        cc_fColorClass(2);
    })

    $("#Tyellow").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)t#\S+/g) || []).join(' ');
        }).addClass('t#ff0');
        cc_fColorClass(2);
    })





    // fast test Background Opacity
    $("#opa3").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)b%\S+/g) || []).join(' ');
        }).addClass('b%3');
        cc_fColorClass(4);
    }); 

    $("#opa6").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)b%\S+/g) || []).join(' ');
        }).addClass('b%6');
        cc_fColorClass(4);
    }); 

    $("#opa9").click(function() {
        $('.fast-test div').removeClass (function (index, css) {
            return (css.match (/(^|\s)b%\S+/g) || []).join(' ');
        }).addClass('b%9');
        cc_fColorClass(4);
    }); 

});
