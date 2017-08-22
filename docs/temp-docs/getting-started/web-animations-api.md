# Web Animations API

> The Web Animations API is a new browser API that animates elements from JavaScript as easily as from CSS Animations.

Most animations can be performed by using just two properties: ```opacity``` and ```transform```.  

## Opacity

Opacity controls the transparency and is useful for fading in and fading out.  For example, a simple fade in:

```js
var t1 = just.animate({
    targets: '.my-class',
    duration: 1000,
    web: {
        opacity: [0, 1]
    }
})

t1.play()
```
This example fades elements with a class of 'my-class' over 1000 milliseconds.

## Transform

Transform performs a number of functions including position, rotation, scaling, and more. Transform property can be used directly.  For example, doing a slide in right:

```js
var t1 = just.animate({
    targets: '.my-class',
    duration: 1000,
    web: {
        transform: ['translateX(200px)', 'translateX(0)']
    }
})

t1.play()
```

This example uses the translateX function in transform to move the element from an offset of 200px from its original position to its original position.  In animation, it is a good idea to place an item in its final position, and then to use transform to offset to its starting position (FLIP).

Just Animate has several special properties that manage transform individually: ```rotate```, ```rotateX```, ```rotateY```, ```rotateZ```, ```scale```, ```scaleX```, ```scaleY```, and ```scaleZ```.

The above could be re-written as follows:

```js
var t1 = just.animate({
    targets: '.my-class',
    duration: 1000,
    web: {
        x: [200, 0]
    }
})

t1.play()
```

The ```x``` property is the shorthand property for calling ```transform: translateX()```.  As shown in the example, Just Animate Web will automatically pixels for CSS lengths such as width or height, and automatically choose degrees for CSS angles such as the rotate() transform function.

> To keep the Web Animations API library small in size, ```transform``` and shorthand properties cannot be used together. It takes quite a lot of code to allow this, and generally, using the shorthand properties is easier/

## Unit-less Properties
Just Animate Web automatically assigns units to the following properties when specified as numbers:

|unit|properties|
|:-------------|:-------------|
|px|```backgroundSize```, ```border```, ```borderBottom```, ```borderBottomLeftRadius```, ```borderBottomRightRadius```, ```borderBottomWidth```, ```borderLeft```, ```borderLeftWidth```, ```borderRadius```, ```borderRight```, ```borderRightWidth```, ```borderTop```, ```borderTopLeftRadius```, ```borderTopRightRadius```, ```borderTopWidth```, ```borderWidth```, ```bottom```, ```columnGap```, ```columnRuleWidth```, ```columnWidth```, ```columns```, ```flexBasis```, ```font```, ```fontSize```, ```gridColumnGap```, ```gridGap```, ```gridRowGap```, ```height```, ```left```, ```letterSpacing```, ```lineHeight```, ```margin```, ```marginBottom```, ```marginLeft```, ```marginRight```, ```marginTop```, ```maskSize```, ```maxHeight```, ```maxWidth```, ```minHeight```, ```minWidth```, ```outline```, ```outlineOffset```, ```outlineWidth```, ```padding```, ```paddingBottom```, ```paddingLeft```, ```paddingRight```, ```paddingTop```, ```perspective```, ```right```, ```shapeMargin```, ```tabSize```, ```top```, ```width```, ```wordSpacing```, ```perspective```, ```x```, ```y```, ```z```|
|deg|```rotateX```, ```rotateY```, ```rotateZ```, ```rotate```|

## Other properties

Just Animate supports whatever properties are also animatable by CSS in that browser.  If a property does not have support, the Web Animations API uses a fallback strategy of switching values midway between keyframes.

