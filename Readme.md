
# timeout

  Timeout function decorator

## Installation

    $ component install component/timeout

## Example

```js
var timeout = require('timeout');

function something(fn) {
  setTimeout(function(){
    fn(null, 'results');
  }, 1000);
}


something = timeout(something, 500);
```

## API

### timeout(callback, ms)

  Apply timeout of `ms` to `callback` and return the new function.

## License

  MIT
