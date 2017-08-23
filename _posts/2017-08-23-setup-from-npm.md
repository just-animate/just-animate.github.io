---
layout: page
title: Setup NPM
permalink: /setup-npm/
---

## Setup from NPM

Just Animate uses a plugin system to use different animations systems together.  You must first install the core library, and then install a plugin such as the Web Animations API. During the startup of your application, you must register the plugins in the order you want them to run.


### Installing Just Animate
- Run the following command from the terminal/command line

```bash
npm i just-animate -S
```
- Import ```animate```, ```sequence```, or ```timeline``` to get animating!

```js
import { animate } from 'just-animate'

const timeline = animate({ /* ... */ })
timeline.play()

```

### Installing the Web Animations API

> The Web Animations API animates DOM elements from JavaScript.  It has similar capabilities to CSS Animations and is supported natively in FireFox and Chrome.

By installing just-animate through NPM, you also have all the files you need to animate using the Web Animation API.  You do, however, need to register the plugin.  In your startup code, add this to register:

```js
import { addPlugin } from 'just-animate'
import { waapiPlugin } from 'just-animate/web'

// register the web animation api plugin
addPlugin(waapiPlugin)
```

- Edge and Safari have not yet implemented the Web Animation API.  In the meantime if you need Edge and Safari support, include this polyfill in your page to ensure the Web Animations API works consistently in every browser.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.2.5/web-animations.min.js"></script>
```

### Installing Extras
> The extra package provide helpful addons that are related to animation such as splitting an element's text into separate elements

By installing just-animate through NPM, you already have the extras package.  Simply import it:

- Include the following script in the head of your html page after the core script
```js
import { shuffle, splitText, random } from 'just-animate/extras'
```


### Installing Tools
> The tools package provides tools for debugging animations.  At the moment, it has a simple scrubber with play, pause, and reverse

By installing just-animate through NPM, you already have the tools package.  Simply import it:

- Include the following script in the head of your html page after the core script

```js
import { animate } from 'just-animate'
import { player } from 'just-animate/tools'

var t1 = animate({ /* */ })

// attach control to animation timeline
player(t1)
```

The player controls should look something like this

![](/player-controls.png)

