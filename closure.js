(function foo() {
  var bar = "bar";

  setTimeout(log, 1000);

  function log() {
    console.log(bar);
  }

})();
