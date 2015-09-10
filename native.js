if (String.prototype.replaceAt === undefined) {
  String.prototype.replaceAt = function(index, char) {
      var a = this.split("");
      a[index] = char;
      return a.join("");
  };
}

if (String.prototype.replaceAt === undefined) {
  String.prototype.replaceAt = function(index, char) {
      return this.valueOf();
  };
}

var hello = "Hallo";
console.log(hello.replaceAt(1, "e"));
