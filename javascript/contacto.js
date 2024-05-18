const CHECK1 = document.getElementById("check1");
const SABOR1 = document.getElementById("sabor1");
CHECK1.addEventListener("click",() =>{
    if (CHECK1.checked==true){
        SABOR1.style.display="block";

    } else{
        SABOR1.style.display="none";
  
    }
})

const CHECK2 = document.getElementById("check2");
const SABOR2 = document.getElementById("sabor2");
const textoTotal = document.getElementById("precioTotal");

CHECK2.addEventListener("click",() =>{
    if (CHECK2.checked==true){
        SABOR2.style.display="block";
    } else{
        SABOR2.style.display="none";
    }
})

const TORTA1 = 8000;
const TORTA2 = 15000;
const TORTA3 = 22000;
const PISO1 = TORTA1;
const PISO2 = TORTA2;
const PISO3 = TORTA3;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#mail");
const telefono = document.getElementById("telefono");
const mensaje = document.querySelector("#mensaje");
const borrar = document.querySelector("#btnBorrar");
const resumen = document.querySelector("#btnResumen");
let totalPago = document.querySelector("#totalPago");

function validarEmail (valorEmail) {

}

function calcularMonto() {
var pisosPastel = document.getElementById("pisosID");
var valorPastel = pisosPastel.value;
var chequear = email.value
var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

if (!regex.test(chequear)) {
    alert("¡email no valido!");
} else {
if (CHECK1.checked==true || CHECK2.checked==true) {
        validarEmail(email);     
        let mensaje = "Muchas gracias! Nos estaremos comunicando para enviarte tu presupuesto!";
            alert(mensaje);
} else {
    switch (valorPastel) {
        case "1":
            textoTotal.innerHTML = TORTA1;
            break;
        case "2":
            textoTotal.innerHTML = TORTA2;
            break;
        case "3":
            textoTotal.innerHTML = TORTA3;
            break;
        default:
            textoTotal.innerHTML = TORTA1;
    }
}
}
}
resumen.addEventListener("click", calcularMonto);