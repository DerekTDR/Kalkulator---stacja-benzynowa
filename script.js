function policz() {
    var cena_ropa = 7.5;
    var cena_benzyna = 6.7;
    if (document.getElementById("benzyna").checked == true) {
        document.getElementById("wynik").value = cena_benzyna * parseFloat(document.getElementById("litry").value) + "zł";
    }
    else if (document.getElementById("ropa").checked == true) {
        document.getElementById("wynik").value = cena_ropa * parseFloat(document.getElementById("litry").value) + "zł";
    }
    
}