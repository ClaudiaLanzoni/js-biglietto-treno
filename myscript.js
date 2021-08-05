
let kmDesiderati = parseInt(prompt("Quanti km desidera percorrere?"));

//tentativo per ripetere alert finchè non viene inserito numero corretto
/*do {
       alert ("Si prega di digitare un numero corretto");
       } while (Number.isNaN(kmDesiderati));
} else {
    kmDesiderati
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




