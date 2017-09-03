---
layout: page
title: Sequences
permalink: /sequences/
---

## Sequences

Chaining together multiple animations is straightforward with the ```sequence()``` function.  Each item is added to the timeline in order.  While it is possible to do this with the ```animate()``` or ```timeline()``` function, having a special helper for sequences makes it easier to adjust the duration of individual sections of a sequence.

In this example, ```#first``` is being moved to the right (x: [0, '200px']) and is faded out.  Next, ```#second``` is being moved to the left to the original position (x: ['200px', 0]) and is faded in.


```js
const timeline = just.sequence([
    {
        targets: '#first',
        duration: 500,
        web: {
            x: [0, '200px'],
            opacity: [1, 0]
        }
    },
    {
        targets: '#second',
        duration: 850,
        web: {
            x: ['200px', 0],
            opacity: [0, 1]
        }
    }
])

timeline.play()
```

The ```sequence()``` function also returns a Timeline, so it can be added to and controlled like any other Timeline.

> sequence() returns a timeline.  We can always add more animations to a timeline.

Addtionally, we can add sequences to an existing timeline by calling ```sequence()``` on the timeline.  For example:

```js
var t1 = timeline()

t1.sequence([ ... ])

t1.play()
```