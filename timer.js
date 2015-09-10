(function() {
  setTimeout(function() {
    console.log("timeout of 1000");
  }, 1000);

  setInterval(function() {
    console.log("interval of 1000");
  }, 1000);

})();
