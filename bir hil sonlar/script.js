var n = +prompt("Nechta son chiqarilsin?");
var arr = [];

for (var i = 0; i < n; i++) {
    var son = Math.floor(Math.random() * 10);
    arr.push(son);
}

console.log("Chiqqan sonlar:", arr);

var takror = 0;
var tekshirilgan = [];

for (var i = 0; i < arr.length; i++) {
    if (tekshirilgan.includes(arr[i])) {
        takror++;
    } else {
        tekshirilgan.push(arr[i]);
    }
}

if (takror > 0) {
    console.log("Bir xil sonlar " + takror + " marta chiqdi");
} else {
    console.log("Bir xil son chiqmadi");
}