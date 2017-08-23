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

var $ = document.querySelectorAll.bind(document);
var on = window.addEventListener;
var off = window.removeEventListener;

var yreveal = function(options, selector) {
  var defaults = {
    reverse: true,
    inViewClass: 'ytriggered',
    offViewClass: 'yuntriggered',
    offset: 0,
    ignoreTransform: true
  };
  var config = Object.assign({}, defaults, options);
  var scrollTop = 0;
  var timeout = undefined;
  var lastScroll = undefined;
  var rects = [];

  var index = function() {
    var els = $(selector);
    return rects = Array.from(els).map(function(el) {
      var thisEl = el;
      var rect = {};
      if(config.ignoreTransform){
        var offsetTop = 0,
        offsetLeft = 0;
        var offsetHeight = el.offsetHeight;
        while(el){
          offsetTop += el.offsetTop;
          el =  el.offsetParent;
        }
        rect.top = offsetTop;
        rect.bottom = offsetTop + offsetHeight;
      }else{
        rect = el.getBoundingClientRect();
      }
      rect.el = thisEl;
      return rect;
    });
  };

  var update = function() {
    var height = window.innerHeight;
    rects.forEach(function(rect) {
      var reveal = rect.bottom > scrollTop && rect.top < (scrollTop + height) - (height * config.offset);
      if(rect.reveal !== reveal){
        rect.el.classList.toggle(config.inViewClass, reveal);
        rect.el.classList.toggle(config.offViewClass, !reveal);
      }
      rect.reveal = reveal;
    });
  };

  var check = function() {
    if(rects.length && lastScroll !== scrollTop){
      update();
    }
  };

  var onScroll = function() {
    scrollTop = window.pageYOffset;
    check();
  };

  index();
  check();
  on('scroll', onScroll);
  on('resize', index);
  on('resize', onScroll);
};

ready(function() {
  'use strict';

  // Header animation
  if(typeof just !== 'undefined'){
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
      targets: ['.header__callouts .button', '#slogan'],
      web: {
        opacity: 0
      }
    });

    t2.add({
      targets: ['.header__callouts .button', '#slogan'],
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
  }

  // Dropdown button
  var dropdown = $('[data-dropdown]');

  if(dropdown.length) { // Homepage
    Array.from(dropdown).forEach(function(button) {
      var contentId = button.getAttribute('data-dropdown');
      button.addEventListener('click', function(e) {
        var content = document.getElementById(contentId);
        var thisBtnExpand = e.target.getAttribute('aria-expanded');
        var contentHidden = content.getAttribute('aria-hidden');
        button.setAttribute('aria-expanded', thisBtnExpand == 'true' ? 'false' : 'true');
        content.setAttribute('aria-hidden', contentHidden == 'true' ? 'false' : 'true');
        content.classList.toggle('drip-drop--expand');
      });
    });

    yreveal({ reverse: false }, '.intro__icon');

  }else { // Doc pages

    // Trigger menu on small viewports
    var navMenu = $('.nav');
    var page = $('.page');
    console.log(navMenu[0], page[0], 'HeeHa');
    navMenu[0].addEventListener('click', function() {
      page[0].classList.toggle('page--navopen');
    });

  }
});
