function policz() {
    var cena_ropa = 7.5;
    var cena_benzyna = 6.7;
    if (document.getElementById("benzyna").checked == true) {
        a = cena_benzyna * parseFloat(document.getElementById("litry").value);
        document.getElementById("wynik").value = a;
    }
    else if (document.getElementById("ropa").checked == true) {
        b = cena_ropa * parseFloat(document.getElementById("litry").value);
        document.getElementById("wynik").value = b;
    }
    
}