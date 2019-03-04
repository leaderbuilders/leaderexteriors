$(function() {
    'use strict';

    $('.top-mobile-navigation-toggle').click(function(event) {
        event.preventDefault();
        $('.top-mobile-navigation').toggleClass('is-active');
        $('body').toggleClass('is-locked');
    });
    
});
