---
layout: default
title: Element Animator
---


## ElementAnimator
Animates one or more elements

### constructor(manager, keyframesOrName, el, timings) 

Creates an instance of ElementAnimator.

**Parameters**

**manager**: `ja.IAnimationManager`, JustAnimate instance

**keyframesOrName**: `string | ja.IIndexed.&lt;ja.IKeyframe&gt;`, keyframe definition or name of registered animation

**el**: `ja.ElementSource`, element or element source to animate

**timings**: `ja.IAnimationEffectTiming`, optional timing overrides.  required when passing in keyframes


### onfinish() 

(description)


### playbackRate 

0 when not playing, 1 when playing forward, and -1 when playing backward



### currentTime

current time of the animation


### finish(fn) 

Finishes the current animation

**Parameters**

**fn**: `ja.ICallbackHandler`, optional error handler

**Returns**: `ja.IAnimator`, this instance of the Element Animator

### play(fn) 

Plays the animation

**Parameters**

**fn**: `ja.ICallbackHandler`, optional error handler

**Returns**: `ja.IAnimator`, this instance of Element Animator

### pause(fn) 

Pauses the animation

**Parameters**

**fn**: `ja.ICallbackHandler`, optional error handler

**Returns**: `ja.IAnimator`, this instance of Element Animator

### reverse(fn) 

Reverses the direction of the animation

**Parameters**

**fn**: `ja.ICallbackHandler`, optional error handler

**Returns**: `ja.IAnimator`, this instance of Element Animator

### cancel(fn) 

Cancels the animation

**Parameters**

**fn**: `ja.ICallbackHandler`, optional error handler

**Returns**: `ja.IAnimator`, this instance of Element Animator
