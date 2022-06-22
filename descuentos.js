//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDESCUENTO(precio, descuento){
   
    const porcentajedelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajedelPrecioConDescuento) / 100;
   
    return precioConDescuento;
    
}



//console.log({
   // precioOriginal,
    //descuento,
    //porcentajedelPrecioConDescuento,
    //precioConDescuento
//});

function onclickButtonPriceDiscount(){
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDESCUENTO(priceValue, discountValue);

  const ResultPrice = document.getElementById("ResultPrice");
  ResultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
}
