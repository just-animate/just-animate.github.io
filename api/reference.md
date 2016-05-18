---
layout: default
title: Just Animate - API Documentation
---

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
### right
####Type: string
-----
### scroll-snap-coordinate
####Type: string
-----
### scroll-snap-destination
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
