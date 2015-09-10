
var test = "Reverse this string!! ";
var reversed = "";

(function reverseFromEnd() {

  for (var i = test.length - 1; i >= 0; i--) {
    reversed += test[i];
  }
  console.log("start from last position: " + reversed);

})();

function reverse(value) {

  if (value.length < 2)
    return value;

  var begin = reverse(value.substring(0, value.length / 2));
  var end = reverse(value.substring(value.length / 2));

  return end + begin;
}
console.log("recursive: " + reverse(test));

String.prototype.replaceAt = function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
};

reversed = "";
var reverseTest = test;
for (var j = 0; j < test.length / 2; j++) {
  var begin = test[j];
  var end = test[test.length - j - 1];

  var a = reverseTest.split("");
  a[j] = end;
  a[test.length - j - 1] = begin;
  reverseTest = a.join("");
  //reverseTest = reverseTest.replaceAt(j, end);
  //reverseTest = reverseTest.replaceAt(test.length - j - 1, begin);
}
console.log("loop by half: " + reverseTest);
