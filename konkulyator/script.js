var a = prompt("Birinchi sonni kiriting:");
var b = prompt("Ikkinchi sonni kiriting:");
var amal = prompt("Amalni tanlang: +  -  *  /");

a = Number(a);
b = Number(b);

if (amal == "+") {
  console.log(a + b);
} 
else if (amal == "-") {
  console.log(a - b);
} 
else if (amal == "*") {
  console.log(a * b);
} 
else if (amal == "/") {
  console.log(a / b);
} 
else {
  console.log("Noto`g`ri amal kiritildi");
}
