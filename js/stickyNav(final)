/*global $,jQuery*/

$(function () {
    'use strict';
    var navOffset = $('nav').offset().top;
    
    $('nav').wrap('<div class="nav-placeholder"></div>');
    $('.nav-placeholder').height($('nav').outerHeight());
        
    $(window).scroll(function () {
        var scrollPos = jQuery(window).scrollTop();

        if (scrollPos >= navOffset) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });
});
