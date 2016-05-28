(function () {
    'use strict';
    $('body').scrollspy({ target: '#navbar' });

    $('#navbar').affix({
        offset: {
            top: 0
        }
    })

    Just.register({
        name: 'shoveRight',
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

    $('#side-navigation li').each(function (i, el, src) {
        var $el = $(el);
        var player = Just.animate('shoveRight', el);
        player.pause();

        $el
            .on('mouseout', function () {
                player.playbackRate = -1;
                player.play();
            })
            .on('mouseover', function () {
                player.playbackRate = 1;
                player.play();
            });
    });
})();