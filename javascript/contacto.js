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

function calcularMonto() {

}

resumen.addEventListener("click", calcularMonto);

