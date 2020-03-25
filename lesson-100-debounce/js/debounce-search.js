'use strict';

const input = document.querySelector('input');
let debounceTimer;

/**
 * Debounced
 */
input.addEventListener('keyup', function pressKey(event) {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        fauxAjax();
    }, 1000);

   
});

/**
 * Simulacia ajaxoveho requestu
 */
function fauxAjax() {
    let start = Date.now();
    let stopTime = Math.floor(Math.random() * 10) * 5;

    while((Date.now() - start) < stopTime) {
        // sleep simulator
    }

    console.log("Here is youe JASON from backend!!!");
}