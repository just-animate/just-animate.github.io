#Delay and Stagger
> This guide assumes the web plugin (Web Animations API) is installed.

## Stagger

One of the surest ways to make make a group of elements animate beautifully is to stagger them so that each element starts at a slightly different time. The simplest way to do this to use the Just Animate ```stagger``` property. In this example, we are going to fade in the elements #first, #second, and #third for 1000ms starting 100ms apart.

```js
const timeline = just.animate({
     targets: ['#first', '#second', '#third'],
     duration: 1000,
     stagger: 100,
     web: { opacity: [0, 1] }
})

timeline.play()
```

- ```#first``` is active at *100ms* and animates to *1100ms*
- ```#second``` is active at *200ms* and animates to *1200ms*
- ```#third``` is active at *300ms* and animates to *1300ms*

This creates a nice effect as each element fades in a slight offset from one another. Without the ```stagger``` property, the same effect would take a lot more code and be harder to make changes to the stagger:

```js
const timeline = just.timeline()
     .fromTo(100, 1100, {
          targets: '#first',
          web: { opacity: [0, 1] }
     })
     .fromTo(200, 1200, {
          targets: '#second',
          web: { opacity: [0, 1] }
     })
     .fromTo(300, 1300, {
          targets: '#third',
          web: { opacity: [0, 1] }
     });
     
timeline.play()
```

## Delay

Delay is a powerful tool for adjusting the relative position of an animation.  For instance, if you wanted to animate an element but after 34 milliseconds, you could do something like this:

```js
const timeline = just.animate({
     targets: '#element',
     duration: 1200,
     delay: 34,
     web: { 
         scale: [1, 1.2, 1] 
     }
})
```

The animation in this case would start at 34ms and animate for 1200ms, finally ending at 1234ms.  

This feature is most powerful when used with sequence(). If we wanted to animate two elements in sequence, but have the second element start before the first element finished, we could do something like this:

```js
const timeline = just.sequence([
     {
          targets: '#element1',
          duration: 1200, 
          web: { 
              x: [200, 0] 
          }
     },
     {
          targets: '#element2',
          duration: 1200,
          delay: -100,
          web: { 
              y: [-400, 0] 
          }
     }
])
``` 

In this case #element2 will start animating 100ms before #element1 is finished animating.  There is also an ```endDelay``` property which does the same thing, but at the end of the animation.


## Delay as a function
If an incremental stagger doesn't suit our needs, we can also specify ```delay``` and ```endDelay``` as a function.  The above stagger code could be written like this:

```js
const timeline = just.animate({
     targets: ['#first', '#second', '#third'],
     duration: 1000,
     delay(t, index) {
          return (index + 1) * 100
     },
     web: { opacity: [0, 1] }
})

timeline.play()
```
In this example, the delay property is resolved for each target.  For #first, index is 0 because it was the first target.  To equal the stagger above, we added 1 to it and then multiplied it by the number of milliseconds we wanted to add to that target's delay.



