import { numberSquared } from "./math.js";

// let numberInput = document.getElementById("number-input").value;

document.querySelector("button").addEventListener("click", () => {
  numberSquared(document.querySelector("input").value);
});

//Sukurkite modulį (t.y. file'ą - multi.js), kuriame būtų viena eksportuota (default) funkcija - multiplikacija. Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius sudaugintus. Pagrindiniame JS file'e (script.js) importuokite ir panaudokite šį modulį.

import multiplikacija from "./multi.js";

console.log(multiplikacija(16, 2));

//Sukurkite modulį pavadinimu header.js. Šiame modulyje bus funkcija, kuri paims app kaip argumentą, tačiau nieko negrąžins. Šios funkcijos tikslas - į app.innerHTML pridėti (t.y. +=) header'io kodą (pasirašykite standartinį HTML su inline CSS). Šį modulį importuokite į pagrindinį file'ą ir paduokite app, kuris bus document.body. Taip, puslapio viršuje turėtų atsivaizduoti header'is, kuris importuotas iš header.js.

import headeris from "./header.js";

headeris(document.body);
