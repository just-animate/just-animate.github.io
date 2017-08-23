---
layout: page
title: Property options
permalink: /property-options/
---

# Property Options

Just Animate uses a system for properties that is meant to be simple to start with and ever growing to accommodate more complex uses.  Generally this is meant to be intuitive, but this guide is meant to outline the specifics of the syntax.

## Property Name

Just Animate uses some basic logic to decide how to handle specific properties.  For plugin props such as ```web``` (Web Animation API), it passes that off to the plugin to handle.  If the ```props``` property has values, the following rules are used to decide where to apply that value:

1. If the animation target is an HTML Element
   - If the property name starts with -- (double-dash), the value is set as a CSS Variable
   - If the element has a property with that exact name, the value is set to the property on the actual element
   - Otherwise, the value is set as an attribute after being converted from camel-case to hyphenated (backgroundColor would be set as background-color)
2. If the animation target is an SVG Element, it follows HTML Element rules with the folowing exceptions:
   - If the property name is viewBox, it is set like an attribute. This exception is in place because the viewBox property on SVGElement is readonly, and the best way to set it is through setAttribute()
3. If nothing else applies, the value is set directly as a property.


## Property Value

Just Animate handles properties in a very flexible manner.  There are a few different ways to write property values: as an array, as a scalar value (transition), as a set of keyframes, and as a function.

### Property Value as an Array

The first way to use properties is an array of values.  In this example, the target is faded in by changing the value of opacity from 0 to 1.

```js
var timeline = just.animate({
   targets: '.my-class',
   duration: 1000,
   web: {
      opacity: [0, 1]
   }
})

timeline.play()

```

### Property Value as a Transition

The second way to use properties is as a transition.  If the value is not an array, it is assumed to be the ending value of the animation.  If no other known values are contained in the timeline, the target's current value is used.  For instance, if we wanted to fade an element out:

```js
var timeline = just.animate({
   targets: '.my-class',
   duration: 1000,
   web: {
      opacity: 0
   }
})


timeline.play()
```

Since no other value for opacity is known, the element's current value is used which can be assumed to be 1.


### Property Value as a set of Keyframes

The third way to use properties is an array of keyframes.  In this example, the target is faded in by tweening between 0 and 1 from 0% of the animation to 40% of the animation, and then faded out by tweening between 1 and 1 from 40% to 100% of the animation.

```js
var timeline = just.animate({
   targets: '.my-class',
   easing: 'ease',
   duration: 1000,
   web: {
      opacity: [
        0,
        { offset: .4, value: 1, easing: 'linear' },
        { offset: 1, value: 1 }
      ]
   }
})

timeline.play()

```

### Property Value as a Function

The fourth way to use properties is to replace any value with a function.

```js
var timeline = just.animate({
   targets: '.my-class',
   easing: 'ease',
   duration: 1000,
   web: {
      opacity: [
        0,
        function(target, index, targetLength) {
           return { offset: 0.5, value: 0.5 };
        },
        {
           offset: 1,
           value: function(target, index, targetLength) {
              return 1;
           }
        }
      ]
   }
})

timeline.play()
```
In this example, the mid value was replaced with a function that returns a keyframe, and the last keyframe's value was replaced with a function.  Each function is resolved when the timeline takes effect.


### Property Value Configuration (Interpolation/Property Easing)
> This is not supported with the ```web``` property as there is currently no way to do this on the Web Animations API.  There is a feature proposed in the level 2 spec that may allow this in the future.

The fifth way to use properties is to define a configuration object.  This is useful for assigning an easing to a particular property or defining a custom interpolator. [See Property Interpolation](/getting-started/prop-interpolation.md)

```js
var timeline = just.animate({
   targets: '.my-class',
   duration: 1000,
   props: {
      opacity: {
         value: [0, 1],
         easing: 'ease-in',
         interpolate: function(left, right) {
            return offset => just.interpolate(left, right, offset)
         }
      }
   }
})

timeline.play()
```
In this example, we have provided a configuration object for opacity.  Opacity has a specific easing of ease-in, and has a custom interpolator.  The value property can be any of the other four other types of property values.
