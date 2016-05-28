'use strict';

// register menu item animation
Just.register({
    name: 'menuItemShoveRight',
    keyframes: [
        {
            translateX: '0',
            borderRight: 'none'
        },
        {
            borderRight: 'thin solid blue'
        },
        {
            translateX: '15px',
            borderRight: 'thin solid blue'
        }
    ],
    timings: {
        duration: 450,
        fill: 'forwards',
        easing: 'ease-out'
    }
});

$(document).ready(function () {
    function createNavLink(sectionName) {
        return '<li class="subnav-item"><a href="#' + sectionName + '">' + sectionName + '</a></li>';
    }

    // initialize scrollspy to set the active sidenav item
    $('body').scrollspy({
        target: '#navbar'
    });

    // affix side navbar on scroll    
    $('#navbar').affix({
        offset: { top: 0 }
    });


    // create sidebar navigation
    var $sideNavigation = $('#side-navigation');
    $('.nav-link[name]').each(function (idx, link) {
        var navItem = $(createNavLink(link.name));
        navItem.appendTo($sideNavigation);

        var player = Just.animate('menuItemShoveRight', navItem);
        player.pause();

        navItem.on('mouseout', function () {
            player.playbackRate = -1;
            player.play();
        });
        navItem.on('mouseover', function () {
            player.playbackRate = 1;
            player.play();
        });
    })

    $('a[href^="#"]').on('click', function (event) {
        var href = this.getAttribute('href');
        var aName = href.substr(1, href.length - 1);
        var target = $('a[name="' + aName + '"]');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 450);
        }
    });
});
