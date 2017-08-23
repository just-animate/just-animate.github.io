---
layout: page
title: Basic usage
permalink: /basic-usage/
---

## Getting Started
> This guide assumes the web plugin (Web Animations API) is installed.

### A Simple Animation

The simplest way to use Just Animate is the ```animate()``` function.  Let's take a look at a simple fade out function.


```js
const timeline = just.animate({
    targets: '.fade-out',
    duration: 1000,
    web: {
        opacity: [1, 0]
    }
})

timeline.play()
```

This example ```targets``` any element with a class of 'fade-out'.  It has a ```duration``` of 1000 milliseconds (or 1 sec) and fades out the element by tweening ```opacity``` from 1 to 0.

### Getting Specific with Keyframes

If we wanted to have more control about when each value occurs, we can use keyframes.
A keyframe is expressed as ```{ offset: 0, value: 'something' }``` where offset is a number between 0 and 1 representing 0% to 100% of the duration.  For example, if we wanted the fade to be at 50% fade at 80% of the total duration, we could simply add in a keyframe:

```js
const timeline = just.animate({
    targets: '.fade-out',
    duration: 1000,
    web: {
        opacity: [1, { offset: .8, value: .5 }, 0]
    }
})

timeline.play()
```

> Note: Keyframes are assumed to be in order.  Just Animate will automatically infer that the first keyframe is offset: 0 and the last is offset: 1.  Additionally, if an offset is omitted, it will automatically position the keyframe halfway between other frames.
