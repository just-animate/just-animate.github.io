# random()

Returns a random number/unit in a range.



```javascript
// returns a number (including decimals) between 0 and 100
just.random(0, 100)

// returns -100px to 100px (only whole numbers)
just.random(-100, 100, 'px', true)

// returns a whole number between 0 and 100
const start = 0;
const end = 100;
const unit = undefined;
const onlyWholeNumbers = true;
just.random(start, end, unit, onlyWholeNumbers);
```

![](/assets/random.gif)

