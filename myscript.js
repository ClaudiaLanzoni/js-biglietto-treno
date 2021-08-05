//Chiedere a utente il numero di km che vuole percorrere e l'età del passeggero

let kmDesiderati = prompt("Quanti km desidera percorrere?");
let etàPasseggero = prompt("Quanti anni ha?");

//messo per vedere su schermo cosa succede
document.getElementById("km-desiderati").innerHTML = kmDesiderati;
document.getElementById("età-passeggero").innerHTML = etàPasseggero;


let prezzoBigliettoStandard = (kmDesiderati * 0.21);

if (etàPasseggero <18) {
    document.getElementById("prezzo-biglietto-20").innerHTML = prezzoBigliettoStandard - (prezzoBigliettoStandard * 0.2);
} else if (etàPasseggero >65) {
    document.getElementById("prezzo-biglietto-40").innerHTML = prezzoBigliettoStandard - (prezzoBigliettoStandard * 0.4);
} else {
    document.getElementById("prezzo-biglietto-standard").innerHTML = prezzoBigliettoStandard;
}


