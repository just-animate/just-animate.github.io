---
layout: default
title: Getting Started - Angular 2.0
---

## Getting Started with Angular 2.0
 
This getting started guide is for projects that want to include JavaScript animations inside an Angular 2.x application, a SystemJS application, or an application
bundled with WebPack, Browserify, or RollupJS.

- If your project needs basic integration, please read the [Getting Started - Basic](/how-to/get-started) documentation
- If your project uses Angular 1.x, please read the [Getting Started - Angular 1.x](/how-to/get-started-with-angular1) documentation

### 1. Download the files for the universal version of Just Animate

There is one primary way to download the files

 - run the command ```npm install just-animate --save``` from your project root

### 2. Include this script on your document

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.1.4/web-animations.min.js"></script>
```
The file is the web-animations polyfill. Just Animate uses the new Web Animations API in JavaScript.  For best browser compatibility, include this even if your browser supports this new standard. 
If you need to run it in SystemJS (typically for a development environment), reference the just-animate-systemjs.js file in the node_modules/just-animate/browser directory.  It contains both the core library and the animations from Animate.css


### 3. Import the JustAnimate module into your application and inject the Animate.css animations

```typescript
import { JustAnimate, animations } from 'just-animate';

JustAnimate.inject(animations.ANIMATE_CSS);
// inject can be called more than once and takes an array of animations
```

### 4. Inject the service into your component

```typescript
import { Component } from 'angular2/core';
import { JustAnimate } from 'just-animate';

@Component({
    template: '<div><button (click)="onClick($event)"></button></div>',
    providers: [ JustAnimate ]
})
class MyComponent {
    constructor(private just: JustAnimate) { 
        
    }
    onClick($event: Event) {
        const element = $event.target
        // your logic
    }
}
```

### 5. Call the animation function any of these ways

  **Using a dom selector**
  
``` javascript
this.just.animate('fadeIn', '#animate-me')
```
 
  **Passing an element directly**
  
``` javascript
this.just.animate('fadeIn', $event.target)
```
 

  **Passing a JQLite object**
  
``` javascript
this.just.animate('fadeIn', angular.element('#animate-me'))
```
  
  
  **Passing a function that returns any of the above**
  
``` javascript
this.just.animate('fadeIn', function() {
  return document.getElementById('animate-me');
});
```
  
  **Passing an array of any of the above**
 
``` javascript
this.just.animate('fadeIn', [angular.element('input:checkbox'), document.getElementById('#animate-me')]);
```

  **Passing in keyframes directly instead of a registered name**

``` javascript
var keyframes = [{ opacity: 0 }, { opacity: 1 }];
this.just.animate(keyframes, '#animate-me')
```
 
### 6. Use the Element Animator returned to control the animation
 
 By default, Element Animators play automatically. If you need to fire it later, call .pause() on the Element Animator to stop it from executing
 
``` javascript
var elementAnimator = this.just.animate('fadeIn', '#animate-me');
elementAnimator.play();
elementAnimator.pause();
elementAnimator.finish();
elementAnimator.reverse();
elementAnimator.cancel();
```
