const CHECK1 = document.getElementById("check1");
const SABOR1 = document.getElementById("sabor1");
CHECK1.addEventListener("click", () => {
    if (CHECK1.checked == true) {
        SABOR1.style.display = "block";
    } else {
        SABOR1.style.display = "none";
    }
});

const CHECK2 = document.getElementById("check2");
const SABOR2 = document.getElementById("sabor2");
CHECK2.addEventListener("click", () => {
    if (CHECK2.checked == true) {
        SABOR2.style.display = "block";
    } else {
        SABOR2.style.display = "none";
    }
});

const TORTA1 = 8000;
const TORTA2 = 15000;
const TORTA3 = 22000;

function calcularMonto() {
    const pisosPastel = document.getElementById("pisosID");
    const valorPastel = pisosPastel.value;
    const textoTotal = document.getElementById("precioTotal");

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


const resumen = document.querySelector("#btnResumen");
resumen.addEventListener("click", calcularMonto);
