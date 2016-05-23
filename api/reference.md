---
layout: default
title: Just Animate - API Documentation
---
<a name="IAnimationEffectTiming"></a>

## IAnimationEffectTiming
Timing options for an animation.  These options are based on the timing options in the Web Animations API and control the rate of playback, the length, and the shape of the animation.

-----
### duration

The amount of time in milliseconds of the entire animation.

#### Type: number (optional)

-----
### easing

The shape of the animation.  Easing functions control the rate at which keyframes are evaluated.  All easing functions are based on a bezier curve and affect the look and feel of the animation.  See 
[Easing documentation at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function#linear) for more information.

#### Type: string (optional)
#### Values
##### (custom cubic-bezier)

A custom cubic-bezier function that defines the shape of the animation


##### ease

cubic-bezier(0.25, 0.1, 0.25, 1.0)

##### linear

cubic-bezier(0.0, 0.0, 1.0, 1.0)

##### initial

Initial value of the element

##### ease-in

cubic-bezier(0.42, 0.0, 1.0, 1.0)

##### ease-out

cubic-bezier(0.0, 0.0, 0.58, 1.0)

##### ease-in-out

cubic-bezier(0.42, 0.0, 0.58, 1.0)

##### easeInCubic

cubic-bezier(0.550, 0.055, 0.675, 0.190)

##### easeOutCubic

cubic-bezier(0.215, 0.610, 0.355, 1.000)

##### easeInOutCubic

cubic-bezier(0.645, 0.045, 0.355, 1.000)

##### easeInCirc

cubic-bezier(0.600, 0.040, 0.980, 0.335)

##### easeOutCirc

cubic-bezier(0.075, 0.820, 0.165, 1.000)

##### easeInOutCirc

cubic-bezier(0.785, 0.135, 0.150, 0.860)

##### easeInExpo

cubic-bezier(0.950, 0.050, 0.795, 0.035)

##### easeOutExpo

cubic-bezier(0.190, 1.000, 0.220, 1.000)

##### easeInOutExpo

cubic-bezier(1.000, 0.000, 0.000, 1.000)

##### easeInQuad

cubic-bezier(0.550, 0.085, 0.680, 0.530)

##### easeOutQuad

cubic-bezier(0.250, 0.460, 0.450, 0.940)

##### easeInOutQuad

cubic-bezier(0.455, 0.030, 0.515, 0.955)

##### easeInQuart

cubic-bezier(0.895, 0.030, 0.685, 0.220)

##### easeOutQuart

cubic-bezier(0.165, 0.840, 0.440, 1.000)

##### easeInOutQuart

cubic-bezier(0.770, 0.000, 0.175, 1.000)

##### easeInQuint

cubic-bezier(0.755, 0.050, 0.855, 0.060)

##### easeOutQuint

cubic-bezier(0.230, 1.000, 0.320, 1.000)

##### easeInOutQuint

cubic-bezier(0.860, 0.000, 0.070, 1.000)

##### easeInSine

cubic-bezier(0.470, 0.000, 0.745, 0.715)

##### easeOutSine

cubic-bezier(0.390, 0.575, 0.565, 1.000)

##### easeInOutSine

cubic-bezier(0.445, 0.050, 0.550, 0.950)

##### easeInBack

cubic-bezier(0.600, -0.280, 0.735, 0.045)

##### easeOutBack

cubic-bezier(0.175,  0.885, 0.320, 1.275)

##### easeInOutBack

cubic-bezier(0.680, -0.550, 0.265, 1.550)

##### elegantSlowStartEnd

cubic-bezier(0.175, 0.885, 0.320, 1.275)

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


-----

<a name="IAnimator"></a>

## IAnimator
Element, Sequence, and Timeline animators return the common interface, [IAnimator](#IAnimator).
This provides a common way to cancel, play, pause, etc.

-----
### cancel(fn)

Cancels the animation

**Parameters**

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

**Parameters**

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


**Parameters**

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

**Parameters**

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

**Parameters**

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

-----
<a name="ICallbackHandler"></a>

## ICallbackHandler

Optional error handler

**Parameters**

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

-----
<a name="IKeyframe"></a>

## IKeyframe

A single keyframe in an animation.  Except for offset, all properties are taken from the list of animateable css properties.  

-----
### offset
#### Type: number
-----
### -moz-outline-radius
####Type: number
-----
### -moz-outline-radius-bottomleft
####Type: string
-----
### -moz-outline-radius-bottomright
####Type: string
-----
### -moz-outline-radius-topleft
####Type: string
-----
### -moz-outline-radius-topright
####Type: string
-----
### -webkit-text-stroke
####Type: string
-----
### -webkit-text-stroke-color
####Type: string
-----
### -webkit-touch-callout
####Type: string
-----
### all
####Type: string
-----
### backdrop-filter
####Type: string
-----
### background
####Type: string
-----
### background-color
####Type: string
-----
### background-position
####Type: string
-----
### background-size
####Type: string
-----
### border
####Type: string
-----
### border-bottom
####Type: string
-----
### border-bottom-color
####Type: string
-----
### border-bottom-left-radius
####Type: number
-----
### border-bottom-right-radius
####Type: number
-----
### border-bottom-width
####Type: string
-----
### border-color
####Type: string
-----
### border-left
####Type: string
-----
### border-left-color
####Type: string
-----
### border-left-width
####Type: string
-----
### border-radius
####Type: number

### border-right
####Type: string
-----
### border-right-color
####Type: string
-----
### border-right-width
####Type: string
-----
### border-top
####Type: string
-----
### border-top-color
####Type: string
-----
### border-top-left-radius
####Type: number
-----
### border-top-right-radius
####Type: number
-----
### border-top-width
####Type: string
-----
### border-width
####Type: string
-----
### bottom
####Type: string
-----
### box-shadow
####Type: string
-----
### clip
####Type: string
-----
### clip-path
####Type: string
-----
### color
####Type: string
-----
### column-count
####Type: string
-----
### column-gap
####Type: string
-----
### column-rule
####Type: string
-----
### column-rule-color
####Type: string
-----
### column-rule-width
####Type: string
-----
### column-width
####Type: string
-----
### columns
####Type: string
-----
### filter
####Type: string
-----
### flex
####Type: string
-----
### flex-basis
####Type: string
-----
### flex-grow
####Type: string
-----
### flex-shrink
####Type: string
-----
### font
####Type: string
-----
### font-size
####Type: string
-----
### font-size-adjust
####Type: string
-----
### font-stretch
####Type: string
-----
### font-weight
####Type: string
-----
### grid-column-gap
####Type: string
-----
### grid-gap
####Type: string
-----
### grid-row-gap
####Type: string
-----
### height
####Type: string
-----
### left
####Type: string
-----
### letter-spacing
####Type: string
-----
### line-height
####Type: string
-----
### margin
####Type: string
-----
### margin-bottom
####Type: string
-----
### margin-left
####Type: string
-----
### margin-right
####Type: string
-----
### margin-top
####Type: string
-----
### mask
####Type: string
-----
### mask-position
####Type: string
-----
### mask-size
####Type: string
-----
### max-height
####Type: string
-----
### max-width
####Type: string
-----
### min-height
####Type: string
-----
### min-width
####Type: string
-----
### motion-offset
####Type: string
-----
### motion-rotation
####Type: string
-----
### object-position
####Type: string
-----
### opacity
####Type: number
-----
### order
####Type: number
-----
### outline
####Type: string
-----
### outline-color
####Type: string
-----
### outline-offset
####Type: string
-----
### outline-width
####Type: string
-----
### padding
####Type: string
-----
### padding-bottom
####Type: string
-----
### padding-left
####Type: string
-----
### padding-right
####Type: string
-----
### padding-top
####Type: string
-----
### perspective
####Type: string
-----
### perspective-origin
####Type: string
-----
### rotate
Controls the rotation of element.  Shorthand for transform: 'rotate()'
####Type: string | string[2]
-----
### rotate3d
Controls the rotation of element.  Shorthand for transform: 'rotate3d()'
####Type: string | string[3]
-----
### rotateX
Controls the rotation of element on the X axis.  Shorthand for transform: 'rotateX()'
####Type: string
-----
### rotateY
Controls the rotation of element on the Y axis.  Shorthand for transform: 'rotateY()'
####Type: string
-----
### rotateZ
Controls the rotation of element on the Z axis.  Shorthand for transform: 'rotateZ()'
####Type: string
-----
### right
####Type: string
-----
### scale
Controls the scale of element.  Shorthand for transform: 'scale()'
####Type: number | number[2]
-----
### scale3d
Controls the scale of element.  Shorthand for transform: 'scale3d()'
####Type: number | number[3]
-----
### scaleX
Controls the scale of element on the X axis.  Shorthand for transform: 'scaleX()'
####Type: number
-----
### scaleY
Controls the scale of element on the Y axis.  Shorthand for transform: 'scaleY()'
####Type: number
-----
### scaleZ
Controls the scale of element on the Z axis.  Shorthand for transform: 'scaleZ()'
####Type: number
-----
### scroll-snap-coordinate
####Type: string
-----
### scroll-snap-destination
####Type: string
-----
### skew
Skews (warps) an element.  Shorthand for transform: 'skew()'
####Type: string | string[2]
-----
### skew3d
Skews (warps) an element.  Shorthand for transform: 'skew3d()'
####Type: string | string[3]
-----
### skewX
Skews (warps) an element on the X axis.  Shorthand for transform: 'skewX()'
####Type: string
-----
### skewY
Skews (warps) an element on the Y axis.  Shorthand for transform: 'skewY()'
####Type: string
-----
### skewZ
Skews (warps) an element on the Z axis.  Shorthand for transform: 'skewZ()'
####Type: string
-----
### shape-image-threshold
####Type: string
-----
### shape-margin
####Type: string
-----
### shape-outside
####Type: string
-----
### text-decoration
####Type: string
-----
### text-decoration-color
####Type: string
-----
### text-emphasis
####Type: string
-----
### text-emphasis-color
####Type: string
-----
### text-indent
####Type: string
-----
### text-shadow
####Type: string
-----
### top
####Type: string
-----
### transform
####Type: string
-----
### transform-origin
####Type: string
-----
### translate
Translates (moves) an element.  Shorthand for transform: 'translate()'
####Type: string | string[2]
-----
### translate3d
Translates (moves) an element.  Shorthand for transform: 'translate3d()'
####Type: string | string[3]
-----
### translateX
Translates (moves) an element on the X axis.  Shorthand for transform: 'translateX()'
####Type: string
-----
### translateY
Translates (moves) an element on the Y axis.  Shorthand for transform: 'translateY()'
####Type: string
-----
### translateZ
Translates (moves) an element on the Z axis.  Shorthand for transform: 'translateZ()'
####Type: string
-----
### vertical-align
####Type: string
-----
### visibility
####Type: string
-----
### width
####Type: string
-----
### word-spacing
####Type: string
-----
### z-index
####Type: number
