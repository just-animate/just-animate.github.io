---
layout: page
title: Easings
permalink: /easings/
---

## Easing / Timing Functions

Easing controls the rate at which an animation progresses.  The default easing of the Web Animation API is linear.  It evenly tweens between values.  This can look unnaturally smooth because things in nature accelerate and decelerate at start and end.  A custom [cubic-bezier](http://cubic-bezier.com/) function or using ```ease``` is a good place to start toward creating natural looking animations.

Add ```easing``` with any supported CSS timing function to the animation:

```js
const timing = just.animate({
    targets: '#element',
    duration: 650,
    easing: 'ease-in', // or 'easeIn'
    web:  {
        opacity: [0, 1]
    }
})
```

Just Animate assumes the easing is ```ease``` if one is not provided.  This is applied to between all keyframes individually.

Just Animate includes the following timing keywords in addition to cubic-bezier() and steps() from CSS:

| Name        | Timing Function                           |
| ------------- |:-----------------------------------:|
|ease           | cubic-bezier(.25, .1, .25, 1)             |
|easeIn         | cubic-bezier(.42, 0, 1, 1)                |
|easeInOut      | cubic-bezier(.42, 0, .58, 1)              |
|easeOut        | cubic-bezier(0, 0, .58, 1)                |
|linear         | cubic-bezier(0, 0, 1, 1)                  |
|stepEnd        | steps(1, end)                             |
|stepStart      | steps(1, start)                           |

For more CSS curves, check out [Just Curves](https://github.com/just-animate/just-curves#curves-made-for-in-css) or go to [cubic-bezier.com](http://cubic-bezier.com/) to design your own.
