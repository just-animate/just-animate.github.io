---
layout: api
title: Just Animate - API Documentation
---

<a name="top"></a>

## Using this document

The API Reference provides detailed information on how each part of Just Animate works.  Before diving into this document, take a look at the How-Tos to see more general (and friendly) explanations on how to use Just Animate. 

If you see an error in the documentation or need an answer not provided here, please raise an issue on the [Just Animate GitHub Issues Page](https://github.com/just-animate/just-animate/issues)

<a name="JustAnimate" class="nav-link"></a>

## JustAnimate

Creates all animations and keeps a list of animations by name.  With the just-animate-core file, a global variable named ```Just``` is added to the environment.
If angular 1.x is detected in the environment, JustAnimate will register itself to the 'just.animate' module as a service named 'just'.  Using SystemJS or CommonJS,
an instance must be explicitly created while bootstrapping the application.  Please see the Getting Started Guides for more information.


-----
### animate(keyframes|name, element, timing?)

Animates one or more elements using a preset animation or a set of keyframes.

**keyframes**: [`ISequenceOptions`](#ISequenceOptions), sequence options

**name**: ```string```, name of registered animation options

**element**: [`ElementSource`](#ElementSource), source of elements

**timing**: [`IAnimationEffectTiming`](#IAnimationEffectTiming), timing options. Optional when using name.  Required when specifying keyframes


#### Usage with name

``` javascript
Just.animate('fadeIn', '#element');
```

#### Usage with keyframes

``` javascript
var keyframes = [
    { opacity: 0 },
    { opacity: 1 }
];
var timings = {
    duration: 1000,
    fill: 'both'
    easing: 'ease-out'
};

Just.animate(keyframes, '#element', timings);
```



-----
### animateSequence(options)

Animates one or more elements as a series of steps.

**options**: [`ISequenceOptions`](#ISequenceOptions), sequence options


#### Usage

``` javascript
Just.animateSequence({
    autoplay: true,
    steps: [
        {
            el: '#element1',
            name: 'fadeIn'
        },
        {
            el: '#element1',
            named: 'fadeOut'
        },
        {
            el: '#element2',
            keyframes: [
                { backgroundColor: 'white' },
                { backgroundColor: 'black' },
            ],
            timing: {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease-in-out'
             }
        }
    ]
});
```

-----
### animateTimeline(options)

Animates one or more elements as events in a timeline.

**options**: [`ITimelineOptions`](#ITimelineOptions), timeline options

#### Usage

``` javascript
Just.animateTimeline({
    autoplay: true,
    duration: 5000,
    events: [
        {
            offset: 0,
            el: '.element1',
            keyframes: [
                { left: 0 },
                { left: '85%' }
            ],
            timings: {
                duration: 4200,
                fill: 'both',
                easing: 'ease-in'
            }
        },
        {
            offset: 0,
            el: '.element1',
            keyframes: [
                { left: 0 },
                { left: '85%' }
            ],
            timings: {
                duration: 5000,
                fill: 'both',
                easing: 'linear'
            }
        }
    ]
});
```

-----
### inject(animations)

Injects a list of animations into JustAnimate.  Only instances created after injection will have these animations.




**animations**: [`IAnimationOptions`](#IAnimationOptions)[], list of animations to be injected


#### Type: static Function
#### Browser Only Usage
``` javascript
Just.inject([
    { 
        name: 'fadeIn',
        keyframes: [
            { opacity: 0 },
            { opacity: 1 }
        ],
        timings: {
            duration: 900,
            fill: 'both',
            easing: 'ease-out'
        }
    },
    { 
        name: 'fadeOut',
        keyframes: [
            { opacity: 1 },
            { opacity: 0 }
        ],
        timings: {
            duration: 900,
            fill: 'both',
            easing: 'ease-in'
        }
    }
]);
```

#### CommonJS/SystemJS Usage

``` javascript
import { JustAnimate } from 'just-animate';

JustAnimate.inject([
    {
        name: 'fadeIn',
        keyframes: [
            { opacity: 0 },
            { opacity: 1 }
        ],
        timings: {
            duration: 900,
            fill: 'both',
            easing: 'ease-out'
        }
    },
    {
        name: 'fadeOut',
        keyframes: [
            { opacity: 1 },
            { opacity: 0 }
        ],
        timings: {
            duration: 900,
            fill: 'both',
            easing: 'ease-in'
        }
    }
]);
```

-----

### register(options)

**options**: [`IAnimationOptions`](#IAnimationOptions), animation to be registered

#### Browser Usage

``` javascript
Just.register({
    name: 'fadeIn',
    keyframes: [
        { opacity: 0 },
        { opacity: 1 }
    ],
    timings: {
        duration: 900,
        fill: 'both',
        easing: 'ease-out'
    }
});
```

#### Universal Usage

``` javascript
import { JustAnimate } from 'just-animate';

var just = new JustAnimate();

just.register({
    name: 'fadeIn',
    keyframes: [
        { opacity: 0 },
        { opacity: 1 }
    ],
    timings: {
        duration: 900,
        fill: 'both',
        easing: 'ease-out'
    }
});
```


<a name="CSSAnimatedProperties" class="nav-link"></a>

## CSS Animated Properties

The following CSS properties can be animated. Properties with '-' in them are converted to camelcase.  For example, border-bottom-left is converted to borderBottomLeft.  Click on each property to learn more on [Mozilla Developer Network](https://developer.mozilla.org/en-US/).  

There are also Just Animate [CSS Transform Shorthand Properties](#CSSTransformProperties) that can be used in place of the transform property.

<!--
- [-moz-outline-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-outline-radius)
- [-moz-outline-radius-bottomleft](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-outline-radius-bottomleft)
- [-moz-outline-radius-bottomright](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-outline-radius-bottomright)
- [-moz-outline-radius-topleft](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-outline-radius-topleft)
- [-moz-outline-radius-topright](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-outline-radius-topright)
- [-webkit-text-fill-color](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color)
- [-webkit-text-stroke](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke)
- [-webkit-text-stroke-color](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke-color)
- [-webkit-touch-callout](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout)-->
- [all](https://developer.mozilla.org/en-US/docs/Web/CSS/all)
- [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- [background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
- [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
- [background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
- [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [border-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
- [border-bottom-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
- [border-bottom-left-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
- [border-bottom-right-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
- [border-bottom-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)
- [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
- [border-left](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
- [border-left-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
- [border-left-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
- [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- [border-right](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
- [border-right-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
- [border-right-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
- [border-top](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
- [border-top-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
- [border-top-left-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
- [border-top-right-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
- [border-top-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)
- [border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
- [bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
- [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [clip](https://developer.mozilla.org/en-US/docs/Web/CSS/clip)
- [clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
- [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [column-count](https://developer.mozilla.org/en-US/docs/Web/CSS/column-count)
- [column-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
- [column-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule)
- [column-rule-color](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color)
- [column-rule-width](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width)
- [column-width](https://developer.mozilla.org/en-US/docs/Web/CSS/column-width)
- [columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)
- [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
- [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
- [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
- [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
- [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
- [font-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust)
- [font-stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch)
- [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
- [grid-column-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap)
- [grid-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap)
- [grid-row-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap)
- [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
- [left](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
- [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
- [margin-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
- [margin-left](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
- [margin-right](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
- [margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
- [mask](https://developer.mozilla.org/en-US/docs/Web/CSS/mask)
- [mask-position](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position)
- [mask-size](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size)
- [max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
- [max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
- [min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)
- [min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
- [motion-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/motion-offset)
- [motion-rotation](https://developer.mozilla.org/en-US/docs/Web/CSS/motion-rotation)
- [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
- [opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
- [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
- [outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
- [outline-color](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color)
- [outline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset)
- [outline-width](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width)
- [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
- [padding-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
- [padding-left](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
- [padding-right](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
- [padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
- [perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
- [perspective-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)
- [right](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
- [scroll-snap-coordinate](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-coordinate)
- [scroll-snap-destination](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-destination)
- [shape-image-threshold](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold)
- [shape-margin](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin)
- [shape-outside](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside)
- [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
- [text-decoration-color](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color)
- [text-emphasis](https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis)
- [text-emphasis-color](https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color)
- [text-indent](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
- [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [top](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
- [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
- [vertical-align](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
- [visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
- [word-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)
- [z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

<a name="CSSTransformProperties" class="nav-link"></a>
## CSS Transform Shorthand Properties

In order to provide a better experience creating animations, Just Animate comes with individual properties that can be combined
to create the transform property.  These individual properties are not directly supported by the Web Animations API (but perhaps someday).

------
### rotate
Controls the rotation of element.  Alias for the rotateZ property
####Type: string
####Usage
```javascript
var angle = '90deg';

var keyframe1 = {
    rotate: angle
};
```
-----
### rotate3d
Controls the rotation of element.  Shorthand for transform: 'rotate3d(?, ?, ?, ?)'
####Type: (string|number)[]
####Usage
```javascript
var x = 0, y = 0, z = 1;
var angle = '90deg';

var keyframe1 = {
    rotate3d: [x, y, z, angle]
};
```
-----
### rotateX
Controls the rotation of element on the X axis.  Shorthand for transform: 'rotate3d(1, 0, 0, ?)'
#### Type: string
#### Usage
```javascript
var angle = '90deg';

var keyframe1 = {
    rotateX: angle
};
```
-----
### rotateY
Controls the rotation of element on the Y axis.  Shorthand for transform: 'rotate3d(0, 1, 0, ?)'
####Type: string
```javascript
var angle = '90deg';

var keyframe1 = {
    rotateY: angle
};
```
-----
### rotateZ
Controls the rotation of element on the Z axis.  Shorthand for transform: 'rotate3d(0, 0, 1, ?)'
####Type: string
```javascript
var angle = '90deg';

var keyframe1 = {
    rotateZ: angle
};
```
-----
### scale
Controls the scale of element.  Shorthand for transform: 'scale(?, ?)'
####Type: number | number[2]
-----
####Usage
```javascript
var x = 2, y = 1;

var keyframe1 = {
    scale: [x, y]
};
```
### scale3d
Controls the scale of element.  Shorthand for transform: 'scale3d(?, ?, ?)'. The same value is used for x, y, and z when a string is passed in.
####Type: number | number[3]
-----
####Usage
```javascript
var x = 2, y = 1, z = 1;

var keyframe1 = {
    scale3d: [x, y, z]
};
```
### scaleX
Controls the scale of element on the X axis.  Shorthand for transform: 'scaleX(?)'
####Type: number
####Usage
```javascript
{
    scaleX: 1.2
}
```
-----
### scaleY
Controls the scale of element on the Y axis.  Shorthand for transform: 'scaleY(?)'
####Type: number
####Usage
```javascript
{
    scaleY: 1.2
}
```
-----
### scaleZ
Controls the scale of element on the Z axis.  Shorthand for transform: 'scaleZ(?)'
####Type: number
####Usage
```javascript
{
    scaleZ: 1.2
}
```
-----
### skew
Skews (warps) an element.  Shorthand for transform: 'skew(?, ?)'
####Type: string | string[2]
####Usage
```javascript
var x = '20deg', y = '0';

var keyframe1 = {
    skew: [x, y]
};
```
-----
### skewX
Skews (warps) an element on the X axis.  Shorthand for transform: 'skewX(?)'
####Type: string
####Usage
```javascript
{
    skewX: '20deg'
}
```
-----
### skewY
Skews (warps) an element on the Y axis.  Shorthand for transform: 'skewY(?)'
####Type: string
####Usage
```javascript
{
    skewY: '20deg'
}
```
-----
### translate
Translates (moves) an element.  Shorthand for transform: 'translate(?, ?)'.  Passing a string will use the same
value on both the x and y axes
####Type: string | string[2]
####Usage
```javascript
{
    translate: ['0', '20px']
}
```
-----
### translate3d
Translates (moves) an element.  Shorthand for transform: 'translate3d(?, ?, ?)'. Passing a string will use the same
value on the x, y, and z axes.
####Type: string | string[3]
####Usage
```javascript
{
    translate3d: ['20px', '0', '0']
}
```
-----
### translateX
Translates (moves) an element on the X axis.  Shorthand for transform: 'translateX()'
####Type: string
####Usage
```javascript
{
    translateX: '20px'
}
```
-----
### translateY
Translates (moves) an element on the Y axis.  Shorthand for transform: 'translateY()'
####Type: string
####Usage
```javascript
{
    translateY: '20px'
}
```
-----
### translateZ
Translates (moves) an element on the Z axis.  Shorthand for transform: 'translateZ()'
####Type: string
####Usage
```javascript
{
    translateZ: '20px'
}
```

<a name="Easings" class="nav-link"></a>
## Easings

The shape of the animation.  Easing functions control the rate at which keyframes are evaluated.  
All easing functions are based on a bezier curve and affect the look and feel of the animation.  A custom easing can be used or one of the built-in ones below.
See [Easing documentation at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function#linear) for more information on easings.


### ease

```css
cubic-bezier(0.25, 0.1, 0.25, 1.0)
```

### ease-in

```css
cubic-bezier(0.42, 0.0, 1.0, 1.0)
```

### ease-out

```css
cubic-bezier(0.0, 0.0, 0.58, 1.0)
```

### ease-in-out

```css
cubic-bezier(0.42, 0.0, 0.58, 1.0)
```

### easeInCubic

```css
cubic-bezier(0.550, 0.055, 0.675, 0.190)
```

### easeOutCubic

```css
cubic-bezier(0.215, 0.610, 0.355, 1.000)
```

### easeInOutCubic

```css
cubic-bezier(0.645, 0.045, 0.355, 1.000)
```

### easeInCirc

```css
cubic-bezier(0.600, 0.040, 0.980, 0.335)
```

### easeOutCirc

```css
cubic-bezier(0.075, 0.820, 0.165, 1.000)
```

### easeInOutCirc

```css
cubic-bezier(0.785, 0.135, 0.150, 0.860)
```

### easeInExpo

```css
cubic-bezier(0.950, 0.050, 0.795, 0.035)
```

### easeOutExpo

```css
cubic-bezier(0.190, 1.000, 0.220, 1.000)
```

### easeInOutExpo

```css
cubic-bezier(1.000, 0.000, 0.000, 1.000)
```

### easeInQuad

```css
cubic-bezier(0.550, 0.085, 0.680, 0.530)
```

### easeOutQuad

```css
cubic-bezier(0.250, 0.460, 0.450, 0.940)
```

### easeInOutQuad

```css
cubic-bezier(0.455, 0.030, 0.515, 0.955)
```

### easeInQuart

```css
cubic-bezier(0.895, 0.030, 0.685, 0.220)
```

### easeOutQuart

```css
cubic-bezier(0.165, 0.840, 0.440, 1.000)
```

### easeInOutQuart

```css
cubic-bezier(0.770, 0.000, 0.175, 1.000)
```

### easeInQuint

```css
cubic-bezier(0.755, 0.050, 0.855, 0.060)
```

### easeOutQuint

```css
cubic-bezier(0.230, 1.000, 0.320, 1.000)
```

### easeInOutQuint

```css
cubic-bezier(0.860, 0.000, 0.070, 1.000)
```

### easeInSine

```css
cubic-bezier(0.470, 0.000, 0.745, 0.715)
```

### easeOutSine

```css
cubic-bezier(0.390, 0.575, 0.565, 1.000)
```

### easeInOutSine

```css
cubic-bezier(0.445, 0.050, 0.550, 0.950)
```

### easeInBack

```css
cubic-bezier(0.600, -0.280, 0.735, 0.045)
```

### easeOutBack

```css
cubic-bezier(0.175,  0.885, 0.320, 1.275)
```

### easeInOutBack

```css
cubic-bezier(0.680, -0.550, 0.265, 1.550)
```

### elegantSlowStartEnd

```css
cubic-bezier(0.175, 0.885, 0.320, 1.275)
```

### linear

```css
cubic-bezier(0.0, 0.0, 1.0, 1.0)
```


<a name="ElementSource"  class="nav-link"></a>

## ElementSource

An element source is any supported means of finding an HTML Element. Here are some of the ways that Just Animate
can locate an Element:

 **Using a dom selector**
  
``` javascript
var element = '#element';
Just.animate('fadeIn', element);
```
 
  **Using an element directly**
  
``` javascript
var element = document.getElementById('element')
Just.animate('fadeIn', element);
```
 
  **Using a jQuery object**
  
``` javascript
var $element = $('#element')
Just.animate('fadeIn', $element);
```
  
   
  **Using an Angular 1.x element**
  
``` javascript
var $element = angular.element('#element')
Just.animate('fadeIn', $element);
```
  
  **Using a function that returns an ElementSource**
  
``` javascript
function elementProvider() {
    return document.getElementById('element');
}

Just.animate('fadeIn', elementProvider);
```
  
  **Using an array of that contains ElementSources**
 
``` javascript
var element = [
    $('input:checkbox'), 
    document.getElementById('element')
];
Just.animate('fadeIn', element);
```

<a name="IAnimationEffectTiming"  class="nav-link"></a>

## IAnimationEffectTiming
Timing options for an animation.  These options are based on the timing options in the Web Animations API and control the rate of playback, the length, and the shape of the animation.

-----
### duration

The amount of time in milliseconds of the entire animation.

#### Type: number (optional)

-----
### easing
See [Easings](#Easings)

#### Type: string (optional)
-----
### fill

Controls how the animation behaves when it is not playing.

#### Type: string (optional)
#### Values: 
##### none

Does not apply styles before or after playing

##### forwards

Extends the animation properties when playing forwards

##### backwards

Extends the animation properties when playing backwards

##### both

Extends the animation both forward and backwards

##### auto

Uses the default value

-----
### iterations

Number of times the animation should play.  By default this is set to 1.  To play an animation indefinitely, supply Infiinity as the value.

#### Type: number (optional)


<a name="IAnimationOptions"  class="nav-link"></a>

## IAnimationOptions

(construction zone... awaiting the proper permits...)

<a name="IAnimator" class="nav-link"></a>

## IAnimator
Element, Sequence, and Timeline animators return the common interface, [IAnimator](#IAnimator).
This provides a common way to cancel, play, pause, etc.

-----
### cancel(fn)

Cancels the animation



**fn**: [`ICallbackHandler`](#ICallbackHandler), optional error handler

**Returns**: [`IAnimator`](#IAnimator), this instance of [IAnimator](#IAnimator)

#### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.cancel();
```

#### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.cancel(function(err) {
    if (err) {
        // handle error
    }
});
```


-----
### currentTime

Position of the animation in milliseconds.  
#### Type: number
#### Usage
``` javascript
var animator = Just.animate('fadeIn', '#target');

console.log(animator.currentTime);
```

-----
### finish(fn) 

Completes the animation.  



**fn**: [`ICallbackHandler`](#ICallbackHandler), optional error handler

**Returns**: [`IAnimator`](#IAnimator), this instance of [IAnimator](#IAnimator)

#### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.finish();
```

#### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.finish(function(err) {
    if (err) {
        // handle error
    }
});
```


-----
### oncancel

Called when the animation cancels.  Assignable to a function.

#### Type: Function
#### Usage
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.oncancel = function() {
    // code to execute when animation cancels
};
```

-----
### onfinish

Called when the animation completes.  Assignable to a function.
#### Type: Function
#### Usage
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.onfinish = function() {
    // code to execute when animation finishes
};
```

-----
### pause(fn) 

Pauses the animation




**fn**: [`ICallbackHandler`](#ICallbackHandler), optional error handler

**Returns**: [`IAnimator`](#IAnimator), this instance of [IAnimator](#IAnimator)

#### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.pause();
```

#### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.pause(function(err) {
    if (err) {
        // handle error
    }
});
```

-----
### play(fn) 

Plays the animation



**fn**: [`ICallbackHandler`](#ICallbackHandler), optional error handler

**Returns**: [`IAnimator`](#IAnimator), this instance of [IAnimator](#IAnimator)

#### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.play();
```

#### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.play(function(err) {
    if (err) {
        // handle error
    }
});
```

-----
### playbackRate 

Rate at which the animation is playing. 
Value is 0 when not playing, 1 when playing forward, and -1 when playing backward.
Decimals are not supported at this time.
#### Type: number
#### Usage
``` javascript
var animator = Just.animate('fadeIn', '#target');

console.log(animator.playbackRate);
```


-----
### reverse(fn) 

Reverses the direction of the animation



**fn**: [`ICallbackHandler`](#ICallbackHandler), optional error handler

**Returns**: [`IAnimator`](#IAnimator), this instance of [IAnimator](#IAnimator)

#### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.reverse();
```

#### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.reverse(function(err) {
    if (err) {
        // handle error
    }
});
```

<a name="ICallbackHandler" class="nav-link"></a>

## ICallbackHandler

Optional error handler



**err**: `string|Error`, error message.

#### Usage
``` javascript
var errorHandler = function (err) { 
    if (err) {
        // error handler logic here
        return;
    }
};
```

<a name="IKeyframe"  class="nav-link"></a>

## IKeyframe

A single keyframe in an animation. Each keyframe has an offset property and CSS properties.  See [CSS Transform Shorthand Properties](#CSSTransformProperties) and [CSS Animated Properties](#CSSAnimatedProperties) for more information.

-----
### offset

Offset is a number between 0 and 1 that tells Just Animate when to play the keyframe.  For instance, with an offset of 0.5 and a timing duration of 1000ms, a keyframe would play at 500ms.

Offset is optional when no other keyframe has specified an offset.  Just Animate assumes that all keyframes are the same distance apart when no offset is provided.

#### Type: number (optional)


<a name="ISequenceEvent"  class="nav-link"></a>

## ISequenceEvent

A single step in a sequence animation.

-----

### el

Elements to animate.

#### Type: [`ElementSource`](#ElementSource)

-----

### keyframes

Keyframes to play at this step. Either a name or keyframes must be provided.

#### Type: [`IKeyframe`](#IKeyframe) []

-----

### name

Registered animation to play. Either a name or keyframes must be provided.

#### Type: string

-----

### timings

Animation timing options.  Required when using keyframes.

#### Type: [`IAnimationEffectTiming`](#IAnimationEffectTiming)

<a name="ISequenceOptions"  class="nav-link"></a>

## ISequenceOptions

Options for constructing a sequence animation.

#### Usage
```javascript
var sequenceOptions = {
    autoplay: true,
    steps: [ /* ...steps... */ ]
};

Just.animateSequence(sequenceOptions);
```

### steps

Steps in the sequence.  Each step animates one or more elements.

#### Type: [`ISequenceEvent`](#ISequenceEvent)[]

-----

### autoplay

Set to true if the sequence animation should begin playback immediately. Default value is false.

#### Type: boolean (optional)


<a name="ITimelineEvent"  class="nav-link"></a>

## ITimelineEvent

An event in a timeline animation.

-----

### el

Elements to animate.

#### Type: [`ElementSource`](#ElementSource)

-----

### keyframes

Keyframes to play at this offset. Either a name or keyframes must be provided.

#### Type: [`IKeyframe`](#IKeyframe)[]

-----

### name

Registered animation to play at this offset. Either a name or keyframes must be provided.

#### Type: string

-----

### offset

Offset from the being of the Timeline. A number between 0 and 1.

#### Type: number

-----

### timings

Animation timing options.  Required when using keyframes.

#### Type: [`IAnimationEffectTiming`](#IAnimationEffectTiming)

<a name="ITimelineOptions"  class="nav-link"></a>

## ITimelineOptions

Options for constructing a timeline animation.

#### Usage
```javascript
var timelineOptions = {
    autoplay: true,
    duration: 1000,
    events: [ /* ...events... */ ]
};

Just.animateTimeline(timelineOptions);
```

-----

### events

Events on the timeline.  Each event specifies when an animation should be played offset from the beginning of the timeline.

#### Type: [`ITimelineEvent`](#ITimelineEvent)[]

-----

### duration

Set to the total time in milliseconds of the timeline animation

#### Type: number

-----

### autoplay

Set to true if the timeline animation should begin playback immediately. Default value is false.

#### Type: boolean (optional)
