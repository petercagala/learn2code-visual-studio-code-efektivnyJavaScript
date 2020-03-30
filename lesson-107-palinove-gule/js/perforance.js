'use strict'

const cycles = 30000;
const measurementsElement = document.querySelector(".measurements");
const testName = "PERFORMANCE TEST 01";





// START TEST
let timeStart = performance.now();
console.time(testName);

for(let i = 0; i < cycles; i++) {
    var unorderedList = document.querySelector(".super-test");

    var listElement = document.createElement("li");
    listElement.innerHTML = i;

    unorderedList.appendChild(listElement);
}



// Premaz vsetky li elementy
cleanListelement(document.querySelector(".super-test"));


// Vysledky testu 01
getPerformanceResults("01", timeStart);



// Apparently faster than ul.innerHTML = '';
function cleanListelement(unorderedList) {
    while(unorderedList.firstChild) {
        unorderedList.removeChild(unorderedList.firstChild);
    }
}

function getPerformanceResults(testNumber, timeStart) {
    let timeEnd = performance.now();
    // Ide to aj tak, ze "PERFORMANCE TEST 01" dam do console.time aj do console.timeEnd
    console.timeEnd("PERFORMANCE TEST " + testNumber);

    measurementsElement.innerHTML = `<small>${testNumber}</small>: ${(timeStart - timeEnd).toFixed(3)}`;
}