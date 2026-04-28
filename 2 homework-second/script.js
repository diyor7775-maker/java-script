function kattasiniTop() {
    var son1 = prompt("Birinchi sonni kiriting:");
    var son2 = prompt("Ikkinchi sonni kiriting:");

    if (son1 > son2) {
        alert("Katta son: " + son1 + " ");
    } else if (son2 > son1) {
        alert("Katta son: " + son2 + " ");
    } else {
        alert("Ikkala son ham teng! ");
    }
}

