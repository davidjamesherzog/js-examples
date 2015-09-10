(function error() {
  try {
    undefinedfunction();
    console.log('I guess you do exist');
  }
  catch(e) {
    console.log('An error has occurred: ' + e.message);
  }

  function undefinedfunction() {

  }
})();
