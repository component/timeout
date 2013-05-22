
var timeout = require('./');

function foo(fn) {
  setTimeout(function(){
    fn(null, 'foo', 'bar', 'baz');
  }, 100);
}

foo = timeout(foo, 1000);

foo(function(err, a, b, c){
  console.log(a, b, c);
});

function bar(fn) {
  setTimeout(function(){
    fn(null, 'foo');
  }, 1000);
}

bar = timeout(bar, 100);

bar(function(err){
  if (err) throw err;
});
