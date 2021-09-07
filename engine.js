// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(opuesto, hipotenusa, adyacente) {
  return opuesto + hipotenusa + adyacente;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(adyacente, altura) {
  return (adyacente * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const Lado = document.getElementById("Lado").value;

  const area = areaCuadrado(Lado);
  alert(area);
}

function calperimetroTriangulo(){
  const Adyacente = document.getElementById("Adyacente").value;
  const Hipotenusa = document.getElementById("Hipotenusa").value;
  const Opuesto = document.getElementById("Opuesto").value;
  const perimetro = perimetroTriangulo(Opuesto,Hipotenusa,Adyacente);
  alert(perimetro)
}

function calareaTriangulo(){
  const Altura = document.getElementById("Altura").value;
  const Adyacente = document.getElementById("Adyacente").value;

  const area = areaTriangulo(Adyacente,Altura)
  alert(area)
}

function caldiametroCirculo(){
  const Radio = document.getElementById("Radio").value;

  const diametro = diametroCirculo(Radio);
  alert(diametro);
}
function calperimetrooCirculo(){
  const Radio = document.getElementById("Radio").value;

  const perimetro = perimetroCirculo(Radio);
  alert(perimetro);
}
function calareaCirculo(){
  const Radio = document.getElementById("Radio").value;

  const area = areaCirculo(Radio);
  alert(area);
}