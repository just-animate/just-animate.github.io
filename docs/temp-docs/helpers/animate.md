## API Reference

### Animation Options

|property|type|description|
|:-------------|:-------------|:-------------|
|delay|number or function|Delay in milliseconds.  [See Delay and Stagger](/stagger-vs-delays.md)|
|easing|string|Rate at which to progress the animation. [See Easings/Timing Functions](/easings-timing-functions.md)|
|endDelay|number or function|End delay in milliseconds.  [See Delay and Stagger](/stagger-vs-delays.md)|
|stagger|number|Delay between each target in the targets list.  [See Delay and Stagger](/stagger-vs-delays.md)| 
|targets|AnimationTarget|An html selector, an Element, a NodeList, or a jQuery object. This can also be an array of any of those or a function that returns any of those.|
|props|PropertyOptions|A dictionary of properties to interpolate.  Can be a normal object property, element attribute, or a CSS Variable. [See Property Options](/getting-started/property-options.md)|
|web|WebPropertyOptions|A dictionary of properties to animate using the Web Animations API. There are some restrictions on usage based on the capabilities of the Web Animations API. [See Property Options](/getting-started/property-options.md)|

### animate(options | options[])
> See [Getting Started](/getting-started/basic-usage.md) for basic usage.

The ```animate()``` function can accept Animation Options or an array of Animation Options.  Each Animation Options object starts from 0ms to its duration unless ```from``` or ```to``` are specified.  A timeline is returned.

In addition to the Animation Options above, ```animate()``` has these additional properties:

|property|type|description|
|:-------------|:-------------|:-------------|
|duration|number|Total time of the animation in milliseconds|
|from|number|When to start the animation in milliseconds|
|to|number|When to stop the animation in milliseconds|

The recommended property to use is ```duration```.  However,

### interpolate(left, right, offset)
The ```interpolate``` function is a helper that interpolates between two numbers at a midpoint (offset).  ```left``` and ```right``` are the numbers corresponding to the last value and the next value.  ```offset``` is a number between 0 and 1 that represents the progression between those two values (.5 = 50%).  This function can be used in conjunction with [Property Interpolation](/getting-started/prop-interpolation.md) to create custom behaviors per property. This function uses the formula: ```left + (right - left) * offset``` to find the value.


### sequence(options[])
> See [Sequences](/sequences.md) for usage.

The ```sequence()``` function accepts an array of Animation Options.  A timeline is returned.  In addition to the Animation Options above, ```sequence()``` has these additional properties:

In addition to the animation options above, ```sequence ()``` has these additional properties:

|property|type|description|
|:-------------|:-------------|:-------------|
|duration|number|Total time of the animation in milliseconds|

### timeline()
The ```timeline()``` function creates an empty timeline.  It is used internally by ```animate()``` and ```sequence()```.  It has the following properties and functions:


|property|type|description|
|:-------------|:-------------|:-------------|
|currentTime|number|Current time of the timeline.  The animation must be active (paused, finished, or running).  When set, it internally calls ```seek()``` and updates the targets on the timeline|
|playbackRate|number|The current rate of time.  -1 is backwards, and 1 is forwards|

#### add(options | options[]): this

Adds animation(s) at the end of the timeline.  Options can either be a single options object or an array of options

.  Add accepts Animation Options in addition to the following properties:

|property|type|description|
|:-------------|:-------------|:-------------|
|duration|number|Total time of the animation in milliseconds|
|from|number|When to start the animation in milliseconds|
|to|number|When to stop the animation in milliseconds|

#### fromTo(from, to, options | options[]): this

Adds animation(s) at a specific part of the duration.  Accepts Animation Options.  The properties '''duration''', '''from''', and '''to''' are ignored.  Options can either be a single options object or an array of options

#### cancel(): this

Cancels an animation, removes all effects on targets, and resets internal state

#### finish(): this
Finishes an animation. If the animation has never been active, this will activate effects
* - If playbackRate == 0 or more, the animation will seek to duration.
* - If playbackRate < 0, the animation will seek to 0

#### on/off(eventName, (time) => void): this
Register/deregister for timeline events.  The follow events exist:

|Event|Occurs when|
|:-------------|:-------------|
|cancel|The ```cancel()``` function has been called|
|finish|The ```finish()``` function has been called or the animation naturally finished|
|pause|The ```pause()``` function has been called|
|reverse|The ```reverse()``` function has been called, ```playbackRate``` has been modified, or if alternate is true, each time the timeline switches direction.|
|update|The timeline is updating its animation controllers.  This is called every frame, every time ```seek()``` is called, and every time ```currentTime``` is set.|
|play|The ```play()``` function has been called|

#### pause(): this
Pauses execution of the animation. If the animation is not active, this will activate effects

#### play(options?): this
Plays the animation until finished.  If the animation is not active, this will activate the effects. The play function has the following optional properties

|property|type|description|
|:-------------|:-------------|:-------------|
|repeat|number|Number of times to play the animation. Use Infinity to play the timeline forever. The default value is 1.|
|alternate|boolean|True if the animation should reverse direction each time it finishes.  This can be used to create a "yo-yo" effect. The default value is false.|


#### reverse(): this
Inverts the animation playbackRate.  If the animation is currently playing, it will reverse the animation
 
#### seek(time): this
Seeks to a specific time.  If the animation is not active, this will activate effects

#### set(options | options[]): this

Sets properties at the end of timeline.  This is primarily useful for setting initial values at the beginning of the timeline or creating a hard switch between two values.  One common example of this is setting transformOrigin in the Web Animations API. 

Set uses Property Options but cannot accept more than one value per property. (i.e. Property Value as Array and Property Value as a set of Keyframes syntax are not supported)

.  Add accepts Animation Options in addition to the following properties:

|property|type|description|
|:-------------|:-------------|:-------------|
|at|number|Time at which to set the properties.  Default value is the total duration of the timeline.| 












