var sana = prompt("Sanani kiriting");
var d = new Date(sana);

var tanla = prompt("Day, Month, Year, Hour yoki Minute");

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

if (tanla == "Day") {
    console.log(days[d.getDay()]);
}

if (tanla == "Month") {
    console.log(d.getMonth() + 1);
}

if (tanla == "Year") {
    console.log(d.getFullYear());
}

if (tanla == "Hour") {
    console.log(d.getHours());
}

