$(document).ready(function() {

    // Background color
    $(".bg_co button").click(function() {
        $('.test-box span').removeClass (function (index, css) {
            return (css.match (/(^|\s)b#\S+/g) || []).join(' ');
        });
        if ($(this).hasClass("BGblack")) {
            $('.test-box span').addClass('b#000');
            $('.test_res').html('Background colors changed to black');
        }
        if ($(this).hasClass("BGwhite")) {
            $('.test-box span').addClass('b#fff');
            $('.test_res').html('Background colors changed to white');
        }
        if ($(this).hasClass("BGred")) {
            $('.test-box span').addClass('b#f00');
            $('.test_res').html('Background colors changed to red');
        }
        if ($(this).hasClass("BGblue")) {
            $('.test-box span').addClass('b#00f');
            $('.test_res').html('Background colors changed to blue');
        }
        if ($(this).hasClass("BGgreen")) {
            $('.test-box span').addClass('b#0f0');
            $('.test_res').html('Background colors changed to green');
        }
        if ($(this).hasClass("BGyellow")) {
            $('.test-box span').addClass('b#ff0');
            $('.test_res').html('Background colors changed to yellow');
        }
        cc_fColorClass(4);
    });

    // Text color
    $(".t_co button").click(function() {
        $('.test-box span').removeClass (function (index, css) {
            return (css.match (/(^|\s)t#\S+/g) || []).join(' ');
        });
        if ($(this).hasClass("Tblack")) {
            $('.test-box span').addClass('t#000');
            $('.test_res').html('Text colors changed to black');
        }
        if ($(this).hasClass("Twhite")) {
            $('.test-box span').addClass('t#fff');
            $('.test_res').html('Text colors changed to white');
        }
        if ($(this).hasClass("Tred")) {
            $('.test-box span').addClass('t#f00');
            $('.test_res').html('Text colors changed to red');
        }
        if ($(this).hasClass("Tblue")) {
            $('.test-box span').addClass('t#00f');
            $('.test_res').html('Text colors changed to blue');
        }
        if ($(this).hasClass("Tgreen")) {
            $('.test-box span').addClass('t#0f0');
            $('.test_res').html('Text colors changed to green');
        }
        if ($(this).hasClass("Tyellow")) {
            $('.test-box span').addClass('t#ff0');
            $('.test_res').html('Text colors changed to yellow');
        }
        cc_fColorClass(2);
    });

    // Background Opacity
    $(".bg_op button").click(function() {
        $('.test-box span').removeClass (function (index, css) {
            return (css.match (/(^|\s)b%\S+/g) || []).join(' ');
        });
        if ($(this).hasClass("Bopa2")) {
            $('.test-box span').addClass('b%2').html('b%2');
            $('.test_res').html('Background opacities changed to 0.2');
        }
        if ($(this).hasClass("Bopa4")) {
            $('.test-box span').addClass('b%4').html('b%4');
            $('.test_res').html('Background opacities changed to 0.4');
        }
        if ($(this).hasClass("Bopa6")) {
            $('.test-box span').addClass('b%6').html('b%6');
            $('.test_res').html('Background opacities changed to 0.6');
        }
        if ($(this).hasClass("Bopa8")) {
            $('.test-box span').addClass('b%8').html('b%8');
            $('.test_res').html('Background opacities changed to 0.8');
        }
        cc_fColorClass(4);
    });

    // text Opacity
    $(".t_op button").click(function() {
        $('.test-box span').removeClass (function (index, css) {
            return (css.match (/(^|\s)t%\S+/g) || []).join(' ');
        });
        if ($(this).hasClass("Topa2")) {
            $('.test-box span').addClass('t%2');
            $('.test_res').html('Text opacities changed to 0.2');
        }
        if ($(this).hasClass("Topa4")) {
            $('.test-box span').addClass('t%4');
            $('.test_res').html('Text opacities changed to 0.4');
        }
        if ($(this).hasClass("Topa6")) {
            $('.test-box span').addClass('t%6');
            $('.test_res').html('Text opacities changed to 0.6');
        }
        if ($(this).hasClass("Topa8")) {
            $('.test-box span').addClass('t%8');
            $('.test_res').html('Text opacities changed to 0.8');
        }
        cc_fColorClass(2);
    });

    // image filter
    $(".i_co button").click(function() {
        $('.panel-body.tester').parent().removeClass (function (index, css) {
            return (css.match (/(^|\s)b#\S+/g) || []).join(' ');
        })
        if ($(this).hasClass("Fblack")) {
            $('.panel-body.tester').parent().addClass('b#000');
            $('.test_res').html('Background image filter changed to black');
        }
        if ($(this).hasClass("Fwhite")) {
            $('.panel-body.tester').parent().addClass('b#fff');
            $('.test_res').html('Background image filter changed to white');
        }
        if ($(this).hasClass("Fred")) {
            $('.panel-body.tester').parent().addClass('b#f00');
            $('.test_res').html('Background image filter changed to red');
        }
        if ($(this).hasClass("Fblue")) {
            $('.panel-body.tester').parent().addClass('b#00f');
            $('.test_res').html('Background image filter changed to blue');
        }
        if ($(this).hasClass("Fgreen")) {
            $('.panel-body.tester').parent().addClass('b#0f0');
            $('.test_res').html('Background image filter changed to green');
        }
        if ($(this).hasClass("Fyellow")) {
            $('.panel-body.tester').parent().addClass('b#ff0');
            $('.test_res').html('Background image filter changed to yellow');
        }
        cc_fColorClass(15);
    });

});