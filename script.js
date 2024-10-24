//  Declaramos variables para elementos del DOM


// Input's

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

//Botones 

let btnSumar = document.getElementById('sumar')
let btnRestar = document.getElementById('restar')
let btnMultiplicar = document.getElementById('multiplicar')
let btnDividir = document.getElementById('dividir')

//resultado

let resultado = document.getElementById('resultado')

// Funciones 

function sumar() {
    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);

    let resultante = numero1 + numero2;
    console.log(resultante);

    resultado.innerText = "El Resultado es: " + resultante;
}

function restar() {
    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);

    let resultante = numero1 - numero2;
    console.log(resultante);

    resultado.innerText = "El Resultado es: " + resultante;
}

function multiplicar() {
    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);

    let resultante = numero1 * numero2;
    console.log(resultante);

    resultado.innerText = "El Resultado es: " + resultante;
}

function dividir() {
    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);

    let resultante = numero1 / numero2;
    console.log(resultante);

    resultado.innerText = "El Resultado es: " + resultante;
}


//LLamado de cada click

btnSumar.addEventListener('click',sumar)
btnRestar.addEventListener('click',restar)
btnMultiplicar.addEventListener('click',multiplicar)
btnDividir.addEventListener('click',dividir)