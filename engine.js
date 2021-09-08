//Codigo de del cuadrado ------------------------------------------

// perimetro cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

//area cuadrado
function areaCuadrado(lado) {
  return lado * lado;
}


// Código del triángulo --------------------------------------------

//perimetro de triangulo
function perimetroTriangulo(opuesto, hipotenusa, adyacente) {
  return opuesto + hipotenusa + adyacente;
}

//area de triangulo
function areaTriangulo(adyacente, altura) {
  return (adyacente * altura) / 2;
}


// Código del círculo ------------------------------------------------

const PI = Math.PI;

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}


/* -----------------------------------------------------------------

// Aquí interactuamos con el HTML

------------------------------------------------------------------- */
// Cuadrado -------------------------------------------------------
function calcularPerimetroCuadrado() {
  const input = document.getElementById("Lado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const Lado = document.getElementById("Lado").value;

  const area = areaCuadrado(Lado);
  alert(area);
}

//triangulo ------------------------------------------------------
function calperimetroTriangulo(){
  const Adyacente = parseInt(document.getElementById("Adyacente").value);
  const Hipotenusa = parseInt(document.getElementById("Hipotenusa").value);
  const Opuesto = parseInt(document.getElementById("Opuesto").value);
  const perimetro = perimetroTriangulo(Opuesto,Hipotenusa,Adyacente);
  alert(perimetro);
}
function calareaTriangulo(){
  const Altura = document.getElementById("Altura").value;
  const Adyacente = document.getElementById("Adyacente").value;

  const area = areaTriangulo(Adyacente,Altura);
  alert(area);
}

//circulo ---------------------------------------------------------
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


/*
RETO----------------------------------------------------------------
Calcular el area de un triangulo Isoseles
--------------------------------------------------------------------
*/
function area__triangulo_isoseles(Lado1, Lado2){
  let sqrt = Math.sqrt();
  const exponente = Math.pow();\

  area = (Lado1*sqrt(exponente(Lado2,2)-(exponente(Lado1,2)/4)))/2;
  alert(area);
}
function checkin_triangulo_isoseles(){
  //declaracion de variables
  const Adyacente = parseInt(document.getElementById("Adyacente").value);
  const Hipotenusa = parseInt(document.getElementById("Hipotenusa").value);
  const Opuesto = parseInt(document.getElementById("Opuesto").value);
  //condicionales
  if(Opuesto == Hipotenusa){
    area__triangulo_isoseles(Opuesto, Hipotenusa);
  }
  else if (Opuesto == Adyacente) {
    area__triangulo_isoseles(Opuesto, Adyacente);
  }
  else if (Hipotenusa == Adyacente) {
    area__triangulo_isoseles(Hipotenusa, Adyacente);
  } 
  else{
    alert("Este triangulo no es un Triangulo Isoseles")
  }
}