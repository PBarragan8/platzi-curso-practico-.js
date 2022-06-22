//Codigo del cuadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado * 4;

}    
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
      return lado * lado;

} 


//console.log("El area del cuadrado es: " + areaCuadrado + " cm**2");
console.groupEnd();

console.group("Triangulos");
//Codigo del triangulo

const ladoaTriangulo1 = 6;
const ladoaTriangulo2 = 6;
const baseTriangulo = 4;


//console.log("Los lados del triangulo miden: " 
// + "cm, " 
 //+ ladoaTriangulo2 
 //+ "cm, " 
 //+ baseTriangulo 
 //+ "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del traingulo es de: " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base){
      return lado1 + lado2 + base;

}  
//console.log("El perimetro del triangulo es: " + perimetroTriangulo+ " cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;

} 



//console.log("El area del triangulo es: " + areaTriangulo + " cm**2");

console.groupEnd();



console.group("Circulos");
//codigo del Circulo

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es : " + radioCirculo + "cm, ");

//Diametro
function diametroCirculo(radio){
  return radio * 2;
} 
//console.log("El diametro del circulo es : " + diametroCirculo + "cm, ");

//PI
const PI = Math.PI;
//console.log("El PI del circulo es : " + PI );

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;

} 
//console.log("El perimetro del circulo es : " + perimetroCirculo + "cm, ");

//Area
function areaCirculo(radio){
   return (radio * radio) * PI;

} 


//console.log("El area del circulo es : " + areaCirculo + "cm^2, ");

console.groupEnd();


//aca interactuamos con el HTML
function calcularPERIMETROCuadrado(){
  const input = document.getElementById("ImputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAREACuadrado(){
    const input = document.getElementById("ImputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);

}