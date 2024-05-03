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

