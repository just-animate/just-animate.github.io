//
// Sprocket includes
//
//= require highlight/highlight.pack
//
//

; (function () {
  'use strict'

  var on = window.addEventListener
  var off = window.removeEventListener

  var ready = function (cb) {
    if (/in/.test(document.readyState)) {
      setTimeout(function () {
        ready(cb)
      }, 9)
    } else {
      cb()
    }
  }

  var $ = function (selector) {
    return [].slice.call(document.querySelectorAll(selector))
  }

  var animateIntro = function () {
    // Header animation
    if (typeof just === 'undefined') {
      return
    }

    just
      .timeline()
      .set({
        targets: ['.header__callouts .button', '#slogan'],
        web: {
          opacity: 0
        }
      })
      .fromTo(0, 600, {
        targets: '#A',
        easing: 'ease-in',
        web: {
          x: [-160, -160],
          y: [-240, -10],
          rotate: [270, 0],
          scale: [0.3, 0.3],
          opacity: [0, 1],
          transformOrigin: ['center center', 'center bottom']
        }
      })
      .fromTo(800, 1400, {
        targets: '#A',
        web: {
          x: [-160, 0],
          y: [-10, 0],
          scale: [0.4, 1],
          transformOrigin: ['center bottom', 'center bottom']
        }
      })
      .fromTo(1000, 1400, {
        targets: '#J',
        web: {
          x: [-20, 0],
          opacity: [0, 1],
          scale: [0.9, 1],
          transformOrigin: ['center bottom', 'center bottom']
        }
      })
      .add({
        targets: '#logo-words path',
        from: 900,
        duration: 200,
        stagger: 20,
        web: {
          opacity: [0, 1],
          scaleY: [0.6, 1.05, 1]
        }
      })
      .add({
        targets: ['.header__callouts .button', '#slogan'],
        duration: 800,
        stagger: 150,
        web: {
          opacity: [0, 1],
          scale: [0.3, 1.1, 1]
        }
      })
      .play()
  }

  var yreveal = function (options, selector) {
    var defaults = {
      reverse: true,
      inViewClass: 'ytriggered',
      offViewClass: 'yuntriggered',
      offset: 0,
      ignoreTransform: true
    }
    var config = Object.assign({}, defaults, options)
    var scrollTop = 0
    var timeout = undefined
    var lastScroll = undefined
    var rects = []

    var index = function () {
      var els = $(selector)
      return (rects = els.map(function (el) {
        var thisEl = el
        var rect = {}
        if (config.ignoreTransform) {
          var offsetTop = 0,
            offsetLeft = 0
          var offsetHeight = el.offsetHeight
          while (el) {
            offsetTop += el.offsetTop
            el = el.offsetParent
          }
          rect.top = offsetTop
          rect.bottom = offsetTop + offsetHeight
        } else {
          rect = el.getBoundingClientRect()
        }
        rect.el = thisEl
        return rect
      }))
    }

    var update = function () {
      var height = window.innerHeight
      rects.forEach(function (rect) {
        var reveal = rect.bottom > scrollTop && rect.top < scrollTop + height - height * config.offset
        if (rect.reveal !== reveal) {
          rect.el.classList.toggle(config.inViewClass, reveal)
          rect.el.classList.toggle(config.offViewClass, !reveal)
        }
        rect.reveal = reveal
      })
      if (!config.reverse) {
        rects = rects.filter(function (rect) {
          return !rect.reveal
        })
      }
    }

    var check = function () {
      if (rects.length && lastScroll !== scrollTop) {
        update()
      }
    }

    var onScroll = function () {
      scrollTop = window.pageYOffset
      check()
    }

    index()
    check()
    on('scroll', onScroll)
    on('resize', index)
    on('resize', onScroll)
  }

  var initDropdowns = function () {
    // Dropdown button
    var dropdowns = $('[data-dropdown]')

    if (dropdowns.length) {
      // Homepage
      dropdowns.forEach(function (button) {
        var contentId = button.getAttribute('data-dropdown')
        var content = document.getElementById(contentId);
        content.style.setProperty('display', content.style.display ? null : 'block');

        button.addEventListener('click', function (e) {
          var thisBtnExpand = e.target.getAttribute('aria-expanded')
          var contentHidden = content.getAttribute('aria-hidden')
          button.setAttribute('aria-expanded', thisBtnExpand == 'true' ? 'false' : 'true')
          content.setAttribute('aria-hidden', contentHidden == 'true' ? 'false' : 'true')
          content.classList.toggle('drip-drop--expand')
        })
      })

      yreveal({ reverse: false }, '.intro__icon')
    } else {
      // Doc pages

      // Trigger menu on small viewports
      var navMenu = $('.nav')
      var page = $('.page')
      navMenu[0].addEventListener('click', function () {
        if (window.matchMedia('(max-width: 768px)').matches) {
          page[0].classList.toggle('page--navopen')
        }
      })
    }
  }

  var lazyLoad = function (url, success) {
    if (document.querySelector('script[src="' + url + '"]')) {
      success();
      return;
    }

    // add script and use callback when file saver is done loading
    var loader = document.createElement('script');
    loader.src = url;
    loader.onload = success;
    document.head.appendChild(loader);
  }

  var downloadFile = function (url) {
    var fileName = url.substr(url.lastIndexOf('/') + 1);

    lazyLoad('https://unpkg.com/file-saver@1.3.3/FileSaver.min.js', function () {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function (resp) {
        var contents = new Blob([xhr.responseText], { type: "text/plain;charset=utf-8" })
        saveAs(contents, fileName);
      }
      xhr.onerror = function (err) {
        console.log(err);
      };
      xhr.send();
    })
  };

  var initDownloads = function () {
    $('[data-download]').forEach(function (el) {
      el.addEventListener('click', function (evt) {
        evt.preventDefault();
        downloadFile(el.getAttribute('href'));
      });
    });
  }

  ready(function () {
    animateIntro();
    initDropdowns();
    initDownloads();
  })
})();
