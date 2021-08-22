let kmDesiderati = parseInt(prompt("Quanti km desidera percorrere?"));

//primo tentativo per ripetere alert finchè non viene inserito numero corretto

while(Number.isNaN(kmDesiderati)) {
    alert ("Si prega di digitare un numero corretto");
    kmDesiderati = parseInt(prompt("Quanti km desidera percorrere?"));
}

// secondo tentativo per ripetere alert finchè non viene inserito numero corretto
/*
for(;Number.isNaN(kmDesiderati);) { //finché la condizione Number.isNaN(kmDesiderati) = true il ciclo continua a ripetersi
    alert ("Si prega di digitare un numero corretto");
    kmDesiderati = parseInt(prompt("Quanti km desidera percorrere?"));
}
*/

// terzo tentativo per ripetere alert finchè non viene inserito numero corretto

/*
let kmDesideratiIsANumber = true;

while(!kmDesideratiIsANumber) {
    if(Number.isNaN(kmDesiderati)) {
        alert ("Si prega di digitare un numero corretto");
        kmDesiderati = parseInt(prompt("Quanti km desidera percorrere?"));
    }
}
*/


let etàPasseggero = parseInt(prompt("Quanti anni ha?"));

//messo per vedere su html cosa succede
document.getElementById("km-desiderati").innerHTML = kmDesiderati;
document.getElementById("età-passeggero").innerHTML = etàPasseggero;


let prezzoBiglietto = (kmDesiderati * 0.21);

if (etàPasseggero <18) {

    console.log(Math.round((prezzoBiglietto - (prezzoBiglietto * 0.2) + Number.EPSILON) * 100) / 100);

    document.getElementById("prezzo-biglietto").innerHTML = Math.round((prezzoBiglietto - (prezzoBiglietto * 0.2) + Number.EPSILON) * 100) / 100;

} else if (etàPasseggero >65) {

    console.log(Math.round((prezzoBiglietto - (prezzoBiglietto * 0.4) + Number.EPSILON) * 100) / 100);

    document.getElementById("prezzo-biglietto").innerHTML = Math.round((prezzoBiglietto - (prezzoBiglietto * 0.4) + Number.EPSILON) * 100) / 100;

} else {

    console.log(Math.round((prezzoBiglietto + Number.EPSILON) * 100) / 100);

    document.getElementById("prezzo-biglietto").innerHTML = Math.round((prezzoBiglietto + Number.EPSILON) * 100) / 100;
}




