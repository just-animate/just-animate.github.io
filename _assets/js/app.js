//
// Sprocket includes
//
//= require highlight/highlight.pack
//
//

var ready = function(cb) {
  /in/.test(document.readyState)
  ? setTimeout(ready.bind(null, cb), 9)
  : cb();
};

ready(function() {
  'use strict';

  // Header animation
  var t1 = just.timeline();

  t1.fromTo(0, 600, {
    targets: '#A',
    easing: 'ease-in',
    web: {
      x: [-160, -160],
      y: [-240, -10],
      rotate: [270, 0],
      scale: [.3, .3],
      opacity: [0, 1],
      transformOrigin: ['center center', 'center bottom']
    }
  });

  t1.fromTo(800, 1400, {
    targets: '#A',
    web: {
      x: [-160, 0],
      y: [-10, 0],
      scale: [.4, 1],
      transformOrigin: ['center bottom', 'center bottom']
    }
  });

  t1.fromTo(1000, 1400, {
    targets: '#J',
    web: {
      x: [-20, 0],
      opacity: [0, 1],
      scale: [.9, 1],
      transformOrigin: ['center bottom', 'center bottom']
    }
  });

  t1.add({
    targets: '#logo-words path',
    from: 900,
    duration: 200,
    stagger: 20,
    web: {
      opacity: [0, 1],
      scaleY: [.6, 1.05, 1]
    }
  });

  t1.play();

  var t2 = just.timeline();

  t2.set({
    targets: '.header__callouts .button',
    web: {
      opacity: 0
    }
  });

  t2.add({
    targets: '.header__callouts .button',
    duration: 800,
    stagger: 150,
    web: {
      opacity: [0, 1],
      scale: [.3, 1.1, 1]
    }
  });

  t2.pause();

  t1.on('finish', function() {
    t2.play();
  });

  // Dropdown button
  var dropdown = document.querySelectorAll('[data-dropdown]');
  Array.from(dropdown).forEach(function(button) {
    var contentId = button.getAttribute('data-dropdown');
    var buttonPosition = button.getBoundingClientRect();
    var content = document.getElementById(contentId);
    content.style.setProperty('top', buttonPosition.top + buttonPosition.height - 3 + 'px');
    content.style.setProperty('left', buttonPosition.left + 'px');
    window.addEventListener('resize', function() {
      buttonPosition = button.getBoundingClientRect();
      content.style.setProperty('top', buttonPosition.top + buttonPosition.height - 3 + 'px');
      content.style.setProperty('left', buttonPosition.left + 'px');
    });
    button.addEventListener('click', function(event) {
      content.classList.toggle('drip-drop--expand');
    });
  });
});
