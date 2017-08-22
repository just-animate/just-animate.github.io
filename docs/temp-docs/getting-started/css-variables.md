## CSS Variables
> CSS Variables are a new browser that allows use of custom properties in CSS that are modifiable by JavaScript.  While they are only currently supported in FireFox and Chrome, a lot of things that were previously difficult to do are fairly trivial.  

Just Animate has basic support for CSS Variables.  At the time of this writing, there is support for animating numeric values and interpolating between discrete values. 

### Fade In 
For instance, if we wanted to animate opacity through CSS Variables, we could do the following in JavaScript:

```js
var timeline = just.animate({
    targets: '.my-class',
    duration: 1000,
    props: {
        '--fade': [0, 1]
    }
})

timeline.play()
```

and then the following in CSS:

```css
.my-class {
    opacity: var(--fade);
}
```

The resulting animation is a simple fade in.

### Animating Linear Gradients
We can even do something more advanced like shifting colors in a linear gradient.  In the JavaScript, we could do the following:

```js
var timeline = just.animate({
    targets: '.my-class',
    duration: 1000,
    props: {
        '--hue': [0, 360]
    }
})

timeline.play()
```

and in the css, we could do the following:

```css
.my-class {
    background: linear-gradient(
        to left,
        hsl(var(--hue), 50%, 50%),
        black
    );
}
```

The resulting background would be a linear gradient from left to right with one side shifting through all colors, and the other side being black.  Before CSS Variables, this would have been difficult to do.  Using Just Animate, it is now even easier.