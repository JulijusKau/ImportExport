import { numberSquared } from "./math.js";

// let numberInput = document.getElementById("number-input").value;

document.querySelector("button").addEventListener("click", () => {
  numberSquared(document.querySelector("input").value);
});

//Sukurkite modulį (t.y. file'ą - multi.js), kuriame būtų viena eksportuota (default) funkcija - multiplikacija. Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius sudaugintus. Pagrindiniame JS file'e (script.js) importuokite ir panaudokite šį modulį.

import multiplikacija from "./multi.js";

console.log(multiplikacija(16, 2));
