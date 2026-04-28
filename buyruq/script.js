var girls = ["sakina", "asal", "soliha"];

var command = prompt("Buyruq yozing: push yoki pop");

if (command === "push") {
  var newGirl = prompt("Yangi ism kiriting:");
  girls.push(newGirl);
}