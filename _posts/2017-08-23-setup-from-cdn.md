---
layout: page
title: Setup CDN
permalink: /setup-cdn/
---

## Setup from CDN

Just Animate uses a plugin system to use different animations systems together.  You must first install the core library, and then install a plugin such as the Web Animations API  The order that you include the plugins determines which plugin tries to handle the animation first.


Just Animate is available [here on CDNJS](https://cdnjs.com/libraries/just-animate) or [here on unpkg.com](https://unpkg.com/just-animate/dist/).  You can get the links to the most recent versions there.


### Installing Just Animate
- Include the following script in the head of your html page:
```html
<script src="just-animate.min.js"></script>
```

- Use ```just``` to start animating!


```js
var timeline = just.animate({ /* ... */ })
timeline.play()
```


### Installing the Web Animations API

> The Web Animations API animates DOM elements from JavaScript.  It has similar capabilities to CSS Animations and is supported natively in FireFox and Chrome.

- Include the following script in the head of your html page after the core script
```html
<script src="just-animate-web.min.js"></script>
```

- Edge and Safari have not yet implemented the Web Animation API.  In the meantime, include this polyfill to ensure Just Animate works consistently in every browser.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.2.5/web-animations.min.js">
</script>
```

### Installing Extras
> The extra package provide helpful addons that are related to animation such as splitting an element's text into separate elements

- Include the following script in the head of your html page after the core script
```html
<script src="just-animate-extras.min.js"></script>
```

### Installing Tools
> The tools package provides tools for debugging animations.  At the moment, it has a simple scrubber with play, pause, and reverse

- Include the following script in the head of your html page after the core script
```html
<script src="just-animate-extras.min.js"></script>
```

```js
var t1 = just.animate({ /* */ })

// attach control to animation timeline
just.tools.player(t1)

```
