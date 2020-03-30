'use strict'

let timeStart = performance.now();
console.time("PERFORMANCE TEST 01");

for(let i = 0; i <50000; i++) {
    document.querySelector("body").style.width = i + "px";

    // Pridanie jedneho riadku kodu pomaly zdvojnasobi potrebny vypoctovy cas
    let w = document.querySelector("body").style.width;
}

let timeEnd = performance.now();

// Ide to aj tak, ze "PERFORMANCE TEST 01" dam do console.time aj do console.timeEnd
console.timeEnd("PERFORMANCE TEST 01");

console.log(
     (timeEnd - timeStart).toFixed(3) + "ms"
);