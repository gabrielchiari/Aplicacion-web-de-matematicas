//Codigo de del cuadrado

// perimetro cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

//area cuadrado
function areaCuadrado(lado) {
  return lado * lado;
}


// Código del triángulo

//perimetro de triangulo
function perimetroTriangulo(opuesto, hipotenusa, adyacente) {
  return opuesto + hipotenusa + adyacente;
}

//area de triangulo
function areaTriangulo(adyacente, altura) {
  return (adyacente * altura) / 2;
}


// Código del círculo

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