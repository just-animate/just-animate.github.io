---
layout: default
title: Just Animate - API Documentation
---

<a name="IAnimator"></a>

## IAnimator
Element, Sequence, and Timeline animators return the common interface, [IAnimator](#IAnimator).
This provides a common way to cancel, play, pause, etc.

-----
### oncancel

Called when the animation cancels.  Assignable to a function.

### Usage
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.oncancel = function() {
    // code to execute when animation cancels
};
```

-----
### onfinish

Called when the animation completes.  Assignable to a function.

### Usage
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.onfinish = function() {
    // code to execute when animation finishes
};
```

-----
### playbackRate 

Rate at which the animation is playing.  
Value is 0 when not playing, 1 when playing forward, and -1 when playing backward.
Decimals are not supported at this time.

### Usage
``` javascript
var animator = Just.animate('fadeIn', '#target');

console.log(animator.playbackRate);
```

-----
### currentTime

Position of the animation in milliseconds.  

### Usage
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

### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.finish();
```

### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.finish(function(err) {
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

### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.play();
```

### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.play(function(err) {
    if (err) {
        // handle error
    }
});
```

-----
### pause(fn) 

Pauses the animation

**Parameters**

**fn**: [`ICallbackHandler`](#ICallbackHandler), optional error handler

**Returns**: [`IAnimator`](#IAnimator), this instance of [IAnimator](#IAnimator)

### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.pause();
```

### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.pause(function(err) {
    if (err) {
        // handle error
    }
});
```

-----
### reverse(fn) 

Reverses the direction of the animation

**Parameters**

**fn**: [`ICallbackHandler`](#ICallbackHandler), optional error handler

**Returns**: [`IAnimator`](#IAnimator), this instance of [IAnimator](#IAnimator)

### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.reverse();
```

### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.reverse(function(err) {
    if (err) {
        // handle error
    }
});
```

-----
### cancel(fn) 

Cancels the animation

**Parameters**

**fn**: [`ICallbackHandler`](#ICallbackHandler), optional error handler

**Returns**: [`IAnimator`](#IAnimator), this instance of [IAnimator](#IAnimator)

### Usage 1
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.cancel();
```

### Usage 2
``` javascript
var animator = Just.animate('fadeIn', '#target');

animator.cancel(function(err) {
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

### Usage
``` javascript
var errorHandler = function (err) { 
    if (err) {
        // error handler logic here
        return;
    }
};
```

-----