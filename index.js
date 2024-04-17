function calculoDeIva () {
    var precio = document.getElementById("precioSinIva").value;
    precio = parseInt(precio) + 21 * precio / 100;
    var total = precio.toFixed(2);
    
    document.querySelector("#resultado").innerHTML = "El precio final de tu producto con IVA es de $" + total;
    document.querySelector("#resultado").style.display = "initial";
}