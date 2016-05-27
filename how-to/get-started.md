---
layout: default
title: How To - Get Started
---

## Getting Started
 
This getting started guide is for projects that want to include JavaScript animations on top of an existing page directed site.  Similar to how jQuery can be accessed anywhere, Just Animate can be plugged in with a script and accessed anywhere from the global variable Just.  

- If your project uses Angular 1.x, please read the [Getting Started - Angular 1.x](/how-to/get-started-with-angular1) documentation
- If your project uses Angular 2.x, SystemJS, or a bundler like WebPack, Browserify, or RollupJS, please read the [Getting Started - Angular 2.0](/how-to/get-started-with-angular2) documentation

### 1. Download the files for the browser version of Just Animate

There are a few ways to get the files

 - clone or [download](https://github.com/just-animate/just-animate/archive/master.zip) the project and copy the files from the dist/browser folder
 - run the command ```npm install just-animate --save``` from your project root and copy the files from the browser directory to your www root
 - (sorry, no CDN just yet!)

### 2. Include these scripts on your document

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.1.4/web-animations.min.js"></script>
<script src="just-animate-core.js"></script>
<script src="just-animate-animations.js"></script>
```
  
  - The first file is the web-animations polyfill. Just Animate uses the new Web Animations API in JavaScript.  For best browser compatibility, include this even if your browser supports this new standard. 
  - The second file is the core library.  It should be included.
  - The third file is optional.  It has the animations ported from Animation.css.  If you are going to use all custom animations, simply omit it.

### 3. Call the animation function any of these ways

  **Using a dom selector**
  
``` javascript
Just.animate('fadeIn', '#animate-me')
```
 
  **Passing an element directly**
  
``` javascript
Just.animate('fadeIn', document.getElementById('animate-me'))
```
 

  **Passing a jQuery object**
  
``` javascript
Just.animate('fadeIn', $('#animate-me'))
```
  
  
  **Passing a function that returns any of the above**
  
``` javascript
Just.animate('fadeIn', function() {
  return document.getElementById('animate-me');
});
```
  
  **Passing an array of any of the above**
 
``` javascript
Just.animate('fadeIn', [$('input:checkbox'), document.getElementById('#animate-me')]);
```

  **Passing in keyframes directly instead of a registered name**

``` javascript
var keyframes = [{ opacity: 0 }, { opacity: 1 }];
Just.animate(keyframes, '#animate-me')
```
 
### 4. Use the Element Animator returned to control the animation
 
 By default, Element Animators play automatically. If you need to fire it later, call .pause() on the Element Animator to stop it from executing
 
``` javascript
var elementAnimator = Just.animate('fadeIn', '#animate-me');
elementAnimator.play();
elementAnimator.pause();
elementAnimator.finish();
elementAnimator.reverse();
elementAnimator.cancel();
```