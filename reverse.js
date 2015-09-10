var reverse = "Reverse this string!";

// start from last position
(function reverseFromEnd(value) {

  var reversed = "";
  for (var i = value.length - 1; i >= 0; i--) {
    reversed += value[i];
  }
  console.log("start from last position: " + reversed);

})(reverse);

// loop by half
(function reverseHalfLoop(value) {

  var reversed = value;
  for (var j = 0; j < value.length / 2; j++) {
    var begin = value[j];
    var end = value[value.length - j - 1];

    var a = reversed.split("");
    a[j] = end;
    a[value.length - j - 1] = begin;
    reversed = a.join("");
  }
  console.log("loop by half: " + reversed);

})(reverse);

// recursive
(function reverseRecursive(value) {

  function reverse(value) {

    if (value.length < 2)
      return value;

    var begin = reverse(value.substring(0, value.length / 2));
    var end = reverse(value.substring(value.length / 2));

    return end + begin;
  }
  console.log("recursive: " + reverse(value));
})(reverse);
